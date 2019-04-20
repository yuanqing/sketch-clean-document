import {
  openSettingsDialog,
  saveSettings,
  CHECK_BOX
} from 'sketch-plugin-helper'

const settingsConfig = {
  title: 'Settings for Delete Unused Styles and Symbols',
  inputs: [
    {
      type: CHECK_BOX,
      key: 'cleanStylesAndSymbols.deleteUnusedTextStyles',
      label: 'Delete unused text styles'
    },
    {
      type: CHECK_BOX,
      key: 'cleanStylesAndSymbols.deleteUnusedLayerStyles',
      label: 'Delete unused layer styles'
    },
    {
      type: CHECK_BOX,
      key: 'cleanStylesAndSymbols.deleteUnusedSymbols',
      label: 'Delete unused symbols'
    }
  ]
}

export default function settings () {
  const settings = openSettingsDialog(settingsConfig)
  if (settings) {
    saveSettings(settings, { successMessage: 'Settings saved' })
  }
}
