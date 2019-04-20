import { showSuccessMessage } from 'sketch-plugin-helper'

import cleanLayers from './clean-layers/clean-layers'
import cleanPages from './clean-pages/clean-pages'
import cleanStyles from './clean-styles/clean-styles'
import cleanSymbols from './clean-symbols/clean-symbols'

export default function cleanDocument () {
  cleanLayers({ isCleanDocument: true })
  cleanSymbols({ isCleanDocument: true })
  cleanStyles({ isCleanDocument: true })
  cleanPages({ isCleanDocument: true })
  showSuccessMessage('Document cleaned')
}
