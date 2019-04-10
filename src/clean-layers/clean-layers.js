import {
  getLayersOnAllPages,
  getLayersOnCurrentPage,
  getSelectedLayers,
  iterateNestedLayers,
  openSettingsDialog,
  saveTemporarySettings,
  showErrorMessage,
  showSuccessMessage,
  CHECK_BOX,
  DROP_DOWN
} from 'sketch-plugin-helper'

import deleteHiddenLayer from './delete-hidden-layer'
import flattenNestedGroup from './flatten-nested-group'
import smartRenameLayer from './smart-rename-layer'

export default function cleanLayers () {
  const selectedLayers = getSelectedLayers()
  const hasSelection = selectedLayers.length !== 0
  const settings = openSettingsDialog({
    title: 'Clean Layers',
    inputs: [
      {
        type: CHECK_BOX,
        key: 'deleteHiddenLayers',
        label: 'Delete hidden layers'
      },
      {
        type: CHECK_BOX,
        key: 'flattenNestedGroups',
        label: 'Flatten nested groups'
      },
      {
        type: CHECK_BOX,
        key: 'smartRenameLayers',
        label: 'Smart rename layers'
      },
      {
        type: DROP_DOWN,
        key: 'scope',
        label: 'Scope',
        possibleValues: [
          hasSelection && 'Selected layers',
          'Current page',
          'Entire document'
        ].filter(Boolean),
        value: hasSelection ? 'Selected layers' : null
      }
    ]
  })
  if (!settings) {
    return
  }
  const { scope, ...settingsWithoutScope } = settings
  let layers = []
  if (scope === 'Selected layers') {
    saveTemporarySettings(settingsWithoutScope)
    layers = selectedLayers
    if (layers.length === 0) {
      showErrorMessage('No layers in selection')
      return
    }
  } else {
    saveTemporarySettings(settings)
    layers =
      scope === 'Current page'
        ? getLayersOnCurrentPage()
        : getLayersOnAllPages()
    if (layers.length === 0) {
      showErrorMessage('No layers found')
      return
    }
  }
  iterateNestedLayers(layers, function (layer) {
    if (settings.deleteHiddenLayers && deleteHiddenLayer(layer)) {
      return
    }
    if (settings.smartRenameLayers) {
      smartRenameLayer(layer)
    }
    if (settings.flattenNestedGroups) {
      flattenNestedGroup(layer)
    }
  })
  showSuccessMessage('Cleaned layers')
}
