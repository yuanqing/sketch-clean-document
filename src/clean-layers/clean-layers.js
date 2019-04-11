import {
  getSelectedLayersOrLayersOnCurrentPage,
  getLayersOnAllPages,
  getSettings,
  iterateNestedLayers,
  showSuccessMessage
} from 'sketch-plugin-helper'

import deleteHiddenLayer from './delete-hidden-layer'
import flattenNestedGroup from './flatten-nested-group'
import smartRenameLayer from './smart-rename-layer'

export default function cleanLayers ({ cleanDocument }) {
  const settings = getSettings()
  const layers = cleanDocument
    ? getLayersOnAllPages()
    : getSelectedLayersOrLayersOnCurrentPage()
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
  showSuccessMessage('Layers cleaned')
}
