import {
  openSettingsDialog,
  saveSettings,
  CHECK_BOX,
  TEXT_BOX
} from 'sketch-plugin-helper'

const settingsConfig = {
  title: 'Settings for Clean Layers',
  inputs: [
    {
      type: CHECK_BOX,
      key: 'cleanLayers.deleteHiddenLayers',
      label: 'Delete hidden layers'
    },
    {
      type: CHECK_BOX,
      key: 'cleanLayers.unnestNestedGroups',
      label: 'Unnest nested groups'
    },
    {
      type: CHECK_BOX,
      key: 'cleanLayers.smartRenameLayers',
      label: 'Smart rename layers'
    },
    {
      type: CHECK_BOX,
      key: 'cleanLayers.smartSortLayers',
      label: 'Smart sort layers'
    },
    {
      type: TEXT_BOX,
      key: 'cleanLayers.whitelistRegularExpression',
      label: 'Whitelist regular expression'
    }
  ]
}

export default function settings () {
  const settings = openSettingsDialog(settingsConfig)
  if (settings) {
    saveSettings(settings, { successMessage: 'Settings saved' })
  }
}
