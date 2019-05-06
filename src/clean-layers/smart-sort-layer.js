import { smartSort } from 'sketch-sort-layer-list/src/attributes/smart-sort'
import updateLayerList from 'sketch-sort-layer-list/src/update-layer-list'

export default function smartSortLayer (layer) {
  if (layer.type === 'Artboard' || layer.type === 'Group') {
    const layers = [...layer.layers].reverse()
    if (layers.length === 0) {
      return
    }
    const sortedLayers = smartSort(layers)
    updateLayerList({ sortedLayers, shouldSelectLayers: false })
  }
}
