import {
  showMessage,
  showSuccessMessage,
  getSettings
} from 'sketch-plugin-helper'

import checkSettings from '../settings/check-settings'
import deleteUnusedSymbols from './delete-unused-symbols'
import organiseSymbols from './organise-symbols'

export default function cleanSymbols ({ isCleanDocument }) {
  const settings = getSettings().cleanSymbols
  if (!checkSettings(settings)) {
    return
  }
  let count = 0
  if (settings.deleteUnusedSymbols) {
    count = deleteUnusedSymbols()
  }
  if (settings.organiseSymbols) {
    organiseSymbols({
      groupDefinition: parseInt(settings.groupDefinition, 10),
      space: settings.space
    })
  }
  if (isCleanDocument) {
    return
  }
  if (settings.deleteUnusedSymbols) {
    if (count === 0) {
      showMessage('No unused symbols')
      return
    }
    showSuccessMessage(
      `Deleted ${count} unused symbol${count === 1 ? '' : 's'}`
    )
  }
}
