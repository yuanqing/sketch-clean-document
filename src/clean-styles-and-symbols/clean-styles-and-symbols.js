import {
  showMessage,
  showSuccessMessage,
  getSettings
} from 'sketch-plugin-helper'

import {
  deleteUnusedLayerStyles,
  deleteUnusedTextStyles
} from './delete-unused-styles'
import deleteUnusedSymbols from './delete-unused-symbols'

export default function cleanStylesAndSymbols ({ isCleanDocument }) {
  const settings = getSettings()
  let deletedStylesCount = 0
  if (settings['cleanStylesAndSymbols.deleteUnusedLayerStyles']) {
    deletedStylesCount += deleteUnusedLayerStyles()
  }
  if (settings['cleanStylesAndSymbols.deleteUnusedTextStyles']) {
    deletedStylesCount += deleteUnusedTextStyles()
  }
  let deletedSymbolsCount = 0
  if (settings['cleanStylesAndSymbols.deleteUnusedSymbols']) {
    deletedSymbolsCount += deleteUnusedSymbols()
  }
  if (isCleanDocument) {
    return
  }
  if (deletedStylesCount === 0 && deletedSymbolsCount === 0) {
    showMessage('No unused styles or symbols found')
    return
  }
  const deletedStylesMessage = createMessage({
    type: 'style',
    count: deletedStylesCount
  })
  const deletedSymbolMessage = createMessage({
    type: 'symbol',
    count: deletedSymbolsCount
  })
  if (deletedStylesCount !== 0 && deletedSymbolsCount !== 0) {
    showSuccessMessage(
      `Deleted ${deletedStylesMessage} and ${deletedSymbolMessage}`
    )
    return
  }
  if (deletedSymbolsCount !== 0) {
    showSuccessMessage(`Deleted ${deletedSymbolMessage}`)
    return
  }
  showSuccessMessage(`Deleted ${deletedStylesMessage}`)
}

function createMessage ({ type, count }) {
  return `${count} unused ${type}${count === 1 ? '' : 's'}`
}
