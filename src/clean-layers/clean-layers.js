import {
  getSelectedLayersOrLayersOnCurrentPage,
  getLayersOnAllPages,
  getSettings,
  iterateNestedLayers,
  showSuccessMessage
} from 'sketch-plugin-helper'

import deleteHiddenLayer from './delete-hidden-layer'
import unnestNestedGroup from './unnest-nested-group'
import smartRenameLayer from './smart-rename-layer'
import smartSortLayer from './smart-sort-layer'

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
    if (settings.smartSortLayers) {
      smartSortLayer(layer)
    }
    if (settings.unnestNestedGroups) {
      unnestNestedGroup(layer)
    }
  })
  showSuccessMessage('Layers cleaned')
}
