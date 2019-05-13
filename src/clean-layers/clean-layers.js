import {
  getLayersOnAllPages,
  getSelectedLayersOrLayersOnCurrentPage,
  getSettings,
  iterateChildLayers,
  showSuccessMessage
} from 'sketch-plugin-helper'

import checkSettings from '../settings/check-settings'
import deleteHiddenLayer from './delete-hidden-layer'
import unnestNestedGroup from './unnest-nested-group'
import roundToNearestPixel from './round-to-nearest-pixel'
import smartRenameLayer from './smart-rename-layer'
import smartSortLayer from './smart-sort-layer'

export default function cleanLayers ({ isCleanDocument }) {
  const settings = getSettings().cleanLayers
  if (!checkSettings(settings)) {
    return
  }
  const layers = isCleanDocument
    ? getLayersOnAllPages()
    : getSelectedLayersOrLayersOnCurrentPage()
  const regularExpression = settings.whitelistRegularExpression
  const whitelistRegularExpression =
    regularExpression === '' ? null : new RegExp(regularExpression)
  iterateChildLayers(layers, function (layer) {
    if (
      whitelistRegularExpression &&
      whitelistRegularExpression.test(layer.name)
    ) {
      return
    }
    if (settings.deleteHiddenLayers && deleteHiddenLayer(layer)) {
      return
    }
    if (settings.roundToNearestPixel) {
      roundToNearestPixel(layer)
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
  if (!isCleanDocument) {
    showSuccessMessage('Layers cleaned')
  }
}
