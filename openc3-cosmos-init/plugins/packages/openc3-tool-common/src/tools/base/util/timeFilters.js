/*
# Copyright 2022 Ball Aerospace & Technologies Corp.
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

# Modified by OpenC3, Inc.
# All changes Copyright 2022, OpenC3, Inc.
# All Rights Reserved
#
# This file may also be used under the terms of a commercial license
# if purchased from OpenC3, Inc.
*/

import { format, parseISO } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'

export default {
  // filters: {
  //   time: function (val, tz) {
  //     if (tz === 'local') {
  //       return val.toLocaleString().split(' ')[1] // TODO: support other locales besides en-US
  //     } else {
  //       return formatInTimeZone(val, tz, 'yyyy-MM-dd HH:mm:ss.SSS')
  //     }
  //   },
  //   // Converts a date to 12:34
  //   // Also works with
  //   hourMin: function (time) {
  //     time = time.toLocaleString()
  //     if (time.includes(' ')) {
  //       time = time.split(' ')[1]
  //     }
  //     return time.split(':', 2).join(':')
  //   },
  //   dateTime: function (val, utc) {
  //     if (utc) {
  //       return val.toISOString()
  //     } else {
  //       return val.toLocaleString() // TODO: support other locales besides en-US
  //     }
  //   },
  // },
  methods: {
    formatTimestamp(timestamp, timeZone) {
      if (timeZone === 'local') {
        // timestamp: 2021-01-20T21:08:49.784Z
        return format(parseISO(timestamp), 'yyyy-MM-dd HH:mm:ss.SSS')
      } else {
        return formatInTimeZone(
          parseISO(timestamp),
          timeZone,
          'yyyy-MM-dd HH:mm:ss.SSS',
        )
      }
    },
    // logFormat(date, utc) {
    //   if (utc) {
    //     return formatInTimeZone(date, 'UTC', 'yyyy-MM-dd HH:mm:ss.SSS')
    //   } else {
    //     return format(date, 'yyyy-MM-dd HH:mm:ss.SSS')
    //   }
    // },
    // generateDateTime(date, utc) {
    //   if (utc) {
    //     return date.toISOString()
    //   } else {
    //     return date.toLocaleString() // TODO: support other locales besides en-US
    //   }
    // },
    // // TODO: Maybe replace with various date-fns methods
    // toIsoString(nSeconds) {
    //   // convert the date object to
    //   const date = new Date(nSeconds)
    //   const tzo = -date.getTimezoneOffset()
    //   const dif = tzo >= 0 ? '+' : '-'
    //   function pad(num) {
    //     var norm = Math.floor(Math.abs(num))
    //     return (norm < 10 ? '0' : '') + norm
    //   }
    //   const year = date.getFullYear()
    //   const month = pad(date.getMonth() + 1)
    //   const day = pad(date.getDate())
    //   const hour = pad(date.getHours())
    //   const minute = pad(date.getMinutes())
    //   const second = pad(date.getSeconds())
    //   const mil = pad(date.getMilliseconds())
    //   const timeZone =
    //     this.utcOrLocal === 'utc'
    //       ? '00:00'
    //       : `${pad(tzo / 60)}:${pad(tzo % 60)}`
    //   return `${year}-${month}-${day}T${hour}:${minute}:${second}.${mil}${dif}${timeZone}`
    // },
  },
}
