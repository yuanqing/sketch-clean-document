import {
  openSettingsDialog,
  saveSettings,
  CHECK_BOX
} from 'sketch-plugin-helper'

const settingsConfig = {
  title: 'Settings for Clean Layers',
  inputs: [
    {
      type: CHECK_BOX,
      key: 'smartRenameLayers',
      label: 'Smart rename layers'
    },
    {
      type: CHECK_BOX,
      key: 'flattenNestedGroups',
      label: 'Flatten nested groups'
    },
    {
      type: CHECK_BOX,
      key: 'deleteHiddenLayers',
      label: 'Delete hidden layers'
    }
  ]
}

export default function settings () {
  const settings = openSettingsDialog(settingsConfig)
  if (settings) {
    saveSettings(settings, { successMessage: 'Settings saved' })
  }
}
