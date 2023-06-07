#!/usr/bin/env python3
# vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4
# -*- coding: latin-1 -*-
"""
exceptions.py
"""

# Copyright 2022 Ball Aerospace & Technologies Corp.
# All Rights Reserved.
#
# This program is free software; you can modify and/or redistribute it
# under the terms of the GNU Lesser General Public License
# as published by the Free Software Foundation; version 3 with
# attribution addendums as found in the LICENSE.txt

# Modified by OpenC3, Inc.
# All changes Copyright 2022, OpenC3, Inc.
# All Rights Reserved
#
# This file may also be used under the terms of a commercial license
# if purchased from OpenC3, Inc.

class CosmosError(RuntimeError):
    """ """


class CosmosConnectionError(CosmosError):
    """
    TODO
    """


class CosmosCheckError(CosmosError):
    """
    TODO
    """


class CosmosRequestError(CosmosError):
    """
    CosmosRequestError

    Parameters:
        message (str): The Request Error from Cosmos v5
        request (openc3.execptions.CosmosJsonRpcRequest): CosmosJsonRpcRequest v5
    """

    def __init__(self, message: str, request):
        super().__init__(message, request)
        self.request = request


class CosmosResponseError(CosmosError):
    """
    CosmosResponseError

    Parameters:
        request (openc3.execptions.CosmosJsonRpcRequest): CosmosJsonRpcRequest v5
        response (openc3.execptions.CosmosJsonRpcErrorResponse): CosmosJsonRpcErrorResponse v5
    """

    def __init__(self, request, response):
        super().__init__(request, response)
        self.request = request
        self.response = response
