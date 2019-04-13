import { adjustParentGroupsToFit } from 'sketch-plugin-helper'

export default function unnestNestedGroup (layer) {
  if (layer.type !== 'Group') {
    return
  }
  const childLayers = layer.layers
  const length = childLayers.length
  if (length === 0) {
    layer.remove()
    adjustParentGroupsToFit(layer)
    return
  }
  if (length === 1) {
    childLayers[0].sketchObject.moveToLayer_beforeLayer(
      layer.parent.sketchObject,
      layer.sketchObject
    )
    childLayers[0].selected = false
    layer.remove()
    adjustParentGroupsToFit(layer)
    unnestNestedGroup(childLayers[0])
    return
  }
  childLayers.forEach(function (childLayer) {
    unnestNestedGroup(childLayer)
  })
}
