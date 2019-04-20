import {
  getLayersOnAllPages,
  getSelectedLayersOrLayersOnCurrentPage,
  getSettings,
  iterateNestedLayers,
  showSuccessMessage
} from 'sketch-plugin-helper'

import deleteHiddenLayer from './delete-hidden-layer'
import unnestNestedGroup from './unnest-nested-group'
import smartRenameLayer from './smart-rename-layer'
import smartSortLayer from './smart-sort-layer'

export default function cleanLayers ({ isCleanDocument }) {
  const settings = getSettings()
  const layers = isCleanDocument
    ? getLayersOnAllPages()
    : getSelectedLayersOrLayersOnCurrentPage()
  const regularExpression = settings['cleanLayers.whitelistRegularExpression']
  const whitelistRegularExpression =
    regularExpression === '' ? null : new RegExp(regularExpression)
  iterateNestedLayers(layers, function (layer) {
    if (
      whitelistRegularExpression &&
      whitelistRegularExpression.test(layer.name)
    ) {
      return
    }
    if (
      settings['cleanLayers.deleteHiddenLayers'] &&
      deleteHiddenLayer(layer)
    ) {
      return
    }
    if (settings['cleanLayers.smartRenameLayers']) {
      smartRenameLayer(layer)
    }
    if (settings['cleanLayers.smartSortLayers']) {
      smartSortLayer(layer)
    }
    if (settings['cleanLayers.unnestNestedGroups']) {
      unnestNestedGroup(layer)
    }
  })
  if (!isCleanDocument) {
    showSuccessMessage('Layers cleaned')
  }
}
