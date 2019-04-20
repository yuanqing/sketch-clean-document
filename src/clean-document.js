import { showSuccessMessage } from 'sketch-plugin-helper'

import cleanLayers from './clean-layers/clean-layers'
import cleanStylesAndSymbols from './clean-styles-and-symbols/clean-styles-and-symbols'

export default function cleanDocument () {
  cleanLayers({ isCleanDocument: true })
  cleanStylesAndSymbols({ isCleanDocument: true })
  showSuccessMessage('Document cleaned')
}
