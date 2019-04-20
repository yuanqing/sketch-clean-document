import {
  openSettingsDialog,
  saveSettings,
  CHECK_BOX,
  DROP_DOWN,
  NUMERIC_TEXT_BOX,
  TEXT_BOX
} from 'sketch-plugin-helper'

const settingsConfig = {
  title: 'Settings for Clean Document',
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
    },
    '-',
    {
      type: CHECK_BOX,
      key: 'cleanSymbols.deleteUnusedSymbols',
      label: 'Delete unused symbols'
    },
    {
      type: CHECK_BOX,
      key: 'cleanSymbols.organiseSymbols',
      label: 'Organise symbols'
    },
    {
      type: DROP_DOWN,
      key: 'cleanSymbols.groupDefinition',
      label: 'Symbol group definition',
      possibleValues: ['1st', '2nd', '3rd', '4th']
    },
    {
      type: NUMERIC_TEXT_BOX,
      key: 'cleanSymbols.space',
      label: 'Space between symbols'
    },
    '-',
    {
      type: CHECK_BOX,
      key: 'cleanStyles.deleteUnusedTextStyles',
      label: 'Delete unused text styles'
    },
    {
      type: CHECK_BOX,
      key: 'cleanStyles.deleteUnusedLayerStyles',
      label: 'Delete unused layer styles'
    },
    '-',
    {
      type: CHECK_BOX,
      key: 'cleanPages.deleteEmptyPages',
      label: 'Delete empty pages'
    },
    {
      type: CHECK_BOX,
      key: 'cleanPages.sortPages',
      label: 'Sort pages'
    }
  ]
}

export default function settings () {
  const settings = openSettingsDialog(settingsConfig)
  if (settings) {
    saveSettings(settings, { successMessage: 'Settings saved' })
  }
}
