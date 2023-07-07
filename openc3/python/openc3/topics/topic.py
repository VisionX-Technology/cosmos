# Copyright 2023 OpenC3, Inc.
# All Rights Reserved.
#
# This program is free software; you can modify and/or redistribute it
# under the terms of the GNU Affero General Public License
# as published by the Free Software Foundation; version 3 with
# attribution addendums as found in the LICENSE.txt
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# This file may also be used under the terms of a commercial license
# if purchased from OpenC3, Inc.

from openc3.utilities.store import EphemeralStore

class Topic:
    # Delegate all unknown class methods to delegate to the EphemeralStore
    @classmethod
    def __getattr__(cls, func):
        def method(*args, **kw_args):
            return getattr(EphemeralStore.instance(), func)(*args, **kw_args)
        return method

    @classmethod
    def clear_topics(cls, topics, maxlen = 0):
        for topic in topics:
            EphemeralStore.xtrim(topic, maxlen)

    @classmethod
    def get_cnt(cls, topic):
        _, packet = EphemeralStore.get_newest_message(topic)
        if packet:
            return int(packet["received_count"])
        else:
            return 0
