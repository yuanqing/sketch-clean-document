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
    const style = layer.style
    const transform = layer.transform
    if (
      transform.rotation !== 0 ||
      transform.flippedHorizontally ||
      transform.flippedVertically ||
      layer.exportFormats.length !== 0 ||
      layer.flow ||
      layer.hidden ||
      layer.locked ||
      style.opacity !== 1 ||
      style.shadows.length !== 0
    ) {
      return
    }
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
