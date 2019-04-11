import { showSuccessMessage } from 'sketch-plugin-helper'

import cleanLayers from './clean-layers/clean-layers'
import deleteUnusedStylesAndSymbols from './delete-unused-styles-and-symbols/delete-unused-styles-and-symbols'

export default function cleanDocument () {
  cleanLayers({ cleanDocument: true })
  deleteUnusedStylesAndSymbols()
  showSuccessMessage('Document cleaned')
}
