<!--
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
-->

<template>
  <div>
    <v-dialog v-model="show" width="800">
      <v-card class="pa-3">
        <v-toolbar>
          <v-toolbar-title>Screens</v-toolbar-title>
          <v-spacer />
          <v-text-field
            class="pa-2"
            label="search"
            v-model="search"
            type="text"
            data-test="search"
            prepend-inner-icon="mdi-magnify"
            clearable
            variant="outlined"
            density="compact"
            clear-icon="mdi-close-circle-outline"
            single-line
            hide-details
          />
        </v-toolbar>
        <v-card-text class="mt-2">
          <v-row dense>
            <v-select
              label="Select Target"
              hide-details
              density="compact"
              @update:model-value="targetNameChanged"
              :items="targetNames"
              item-title="label"
              item-value="value"
              v-model="selectedTargetName"
              data-test="select-target"
            />
          </v-row>
          <v-row dense>
            <v-data-table
              single-expand
              show-expand
              item-key="name"
              class="elevation-1"
              v-model:expanded="expanded"
              :headers="screenHeaders"
              :items="screens"
              :search="search"
              :items-per-page="5"
              :items-per-page-options="[5]"
            >
              <template v-slot:item.actions="{ item }">
                <v-tooltip location="top">
                  <template v-slot:activator="{ props }">
                    <div v-bind="props">
                      <v-btn
                        icon
                        data-test="deleteScreenIcon"
                        @click="() => deleteScreen(item)"
                      >
                        <v-icon> mdi-delete </v-icon>
                      </v-btn>
                    </div>
                  </template>
                  <span> Delete Screen </span>
                </v-tooltip>
              </template>
              <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length">
                  <v-textarea readonly rows="8" :model-value="item" />
                </td>
              </template>
              <template v-slot:no-data>
                <span>Currently no screens found for this Target</span>
              </template>
            </v-data-table>
          </v-row>
          <v-row>
            <span class="ma-2 text-red" v-show="text" v-text="text" />
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { OpenC3Api } from '@openc3/tool-common/src/services/openc3-api'

export default {
  props: {
    modelValue: Boolean,
  },
  data() {
    return {
      rules: {
        required: (value) => !!value || 'Required',
      },
      ScreenHeaders: [
        { text: 'Name', align: 'start', value: 'name' },
        { text: 'Type', value: 'type' },
        { text: 'Actions', value: 'actions', sortable: false },
        { text: '', value: 'data-table-expand', sortable: false },
      ],
      targetNames: [],
      selectedTargetName: '',
      screens: [],
      search: null,
      expanded: [],
      text: null,
    }
  },
  created: function () {
    const api = new OpenC3Api()
    api
      .get_target_names({ params: { scope: window.openc3Scope } })
      .then((data) => {
        for (let target of data) {
          this.targets.push({ label: target, value: target })
        }
        if (!this.selectedTarget) {
          this.selectedTarget = this.targets[0].value
        }
        this.updateScreens()
      })
      .catch((error) => {
        if (error) {
          const alertObject = {
            text: `Failed to get targets. Error: ${error}`,
            type: 'error',
          }
          this.$emit('alert', alertObject)
        }
      })
  },
  computed: {
    error: function () {
      return null
    },
    show: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
    listData: function () {
      if (!this.screens) return []
      let screenId = 0
      return this.screens.map((screen) => {
        screenId += 1
        return {
          ...screen,
          screenId,
        }
      })
    },
  },
  methods: {
    updateScreens() {
      this.screens = []
      Api.get('/openc3-api/screen/' + this.selectedTargetName).then(
        (response) => {
          for (let screen of response.data) {
            this.screens.push(screen)
          }
        },
      )
    },
    deleteScreen: function (screen) {
      this.$dialog
        .confirm(`Remove ${screen.name}`, {
          okText: 'Delete',
          cancelText: 'Cancel',
        })
        .then((dialog) => {
          const updateObject = {
            screenName: screen.name,
            screenType: screen.type,
            type: 'delete',
          }
          this.$emit('update', updateObject)
        })
        .catch((error) => {
          if (error !== true) {
            const alertObject = {
              text: `Failed to delete screen ${screen.name} Error: ${error}`,
              type: 'error',
            }
            this.$emit('alert', alertObject)
          }
        })
    },
  },
}
</script>

<style scoped></style>
