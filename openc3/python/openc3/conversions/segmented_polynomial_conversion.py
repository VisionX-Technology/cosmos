# Copyright 2023 OpenC3, Inc.
# All Rights Reserved.
#
# This program is free software; you can modify and/or redistribute it
# under the terms of the GNU Affero General Public License
# as published by the Free Software Foundation; version 3 with
# attribution addums as found in the LICENSE.txt
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.

# This file may also be used under the terms of a commercial license
# if purchased from OpenC3, Inc.


from openc3.conversions.conversion import Conversion


# Segmented polynomial conversions consist of polynomial conversions that are
# applied for a range of values.
class SegmentedPolynomialConversion(Conversion):
    # A polynomial conversion segment which applies the conversion from the
    # lower bound (inclusive) until another segment's lower bound is
    # encountered.
    class Segment:
        # Creates a polynomial conversion segment. Multiple Segments are used to
        # implement a {SegmentedPolynomialConversion}.
        #
        # @param lower_bound [Integer] The value at which point this polynomial conversion
        #   should apply. All values >= to this value will be converted using the
        #   given coefficients.
        # @param coeffs [Array<Integer>] The polynomial coefficients
        def __init__(self, lower_bound, coeffs):
            self.lower_bound = lower_bound
            self.coeffs = coeffs

        # Implement the comparison operator to compared based on the lower_bound
        # but sort in reverse order so the segment with the largest lower_bound
        # comes first. This makes the calculation code in call easier.
        #
        # @param other_segment [Segment] The segment to compare
        # @return [Integer] 1 if self.lower_bound > other_segment.lower_bound, 0
        #   if they are equal, -1 if self.lower_bound < other_segment.lower_bound
        def __lt__(self, other_segment):
            return other_segment.lower_bound < self.lower_bound

        # Implement equality operator primarily for ease of testing
        #
        # @param segment [Segment] Other segment
        def __eq__(self, other_segment):
            return self.lower_bound == other_segment.lower_bound and self.coeffs == other_segment.coeffs

        # Perform the polynomial conversion
        #
        # @param value [Numeric] The value to convert
        # @return [Float] The converted value
        def calculate(self, value):
            converted = 0.0
            for index in range(0, len(self.coeffs)):
                converted += float(self.coeffs[index]) * (value**index)
            return converted

    # Initialize the converted_type to :FLOAT and converted_bit_size to 64.
    #
    # @param segments [Array] Array of segments typically generated by as_json
    #   Format similar to the following: [[15, [3, 2]], [10, [1, 2]]]
    #   Where each entry is an array with the first value as the lower_bound
    #   and the other entry is an array of the coefficients for that segment.
    def __init__(self, segments=[]):
        super().__init__()
        self.segments = []
        self.params = []
        for lower_bound, coeffs in segments:
            self.add_segment(lower_bound, *coeffs)
        self.converted_type = "FLOAT"
        self.converted_bit_size = 64

    # Add a segment to the segmented polynomial. The lower bound is inclusive, but
    # is ignored for the segment with the lowest lower_bound.
    #
    # @param lower_bound [Integer] The value at which point this polynomial conversion
    #   should apply. All values >= to this value will be converted using the
    #   given coefficients.
    # @param coeffs [Array<Integer>] The polynomial coefficients
    def add_segment(self, lower_bound, *coeffs):
        self.params.append([lower_bound, coeffs])
        self.segments.append(SegmentedPolynomialConversion.Segment(lower_bound, coeffs))
        self.segments.sort()

    # @param (see Conversion#call)
    # @return [Float] The value with the polynomial applied
    def call(self, value, packet, buffer):
        # Try to find correct segment
        for segment in self.segments:
            if value >= segment.lower_bound:
                return segment.calculate(value)

        # Default to using segment with smallest lower_bound
        segment = self.segments[-1]
        if segment:
            return self.segments[-1].calculate(value)
        else:
            return None

    # @return [String] The name of the class followed by a description of all
    #   the polynomial segments.
    def __str__(self):
        result = ""
        count = 0
        for segment in self.segments:
            if count > 0:
                result += "\n"
            result += f"Lower Bound= {segment.lower_bound} Polynomial= "
            for index in range(0, len(segment.coeffs)):
                if index == 0:
                    result += f"{segment.coeffs[index]}"
                elif index == 1:
                    result += f" + {segment.coeffs[index]}x"
                else:
                    result += f" + {segment.coeffs[index]}x^{index}"
            count += 1
        return result

    # @param (see Conversion#to_config)
    # @return [String] Config fragment for this conversion
    def to_config(self, read_or_write):
        config = ""
        for segment in self.segments:
            config += f"    SEG_POLY_{read_or_write}_CONVERSION {segment.lower_bound} {' '.join(segment.coeffs)}\n"
        return config
