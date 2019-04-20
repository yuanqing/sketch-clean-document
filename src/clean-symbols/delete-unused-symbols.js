import { getLayersOnAllPages, iterateNestedLayers } from 'sketch-plugin-helper'

export default function deleteUnusedSymbols () {
  let count = 0
  iterateNestedLayers(getLayersOnAllPages(), function (layer) {
    if (layer.type === 'SymbolMaster' && layer.getAllInstances().length === 0) {
      layer.remove()
      count++
    }
  })
  return count
}
