import {
  showMessage,
  showSuccessMessage,
  getSettings
} from 'sketch-plugin-helper'

import checkSettings from '../settings/check-settings'
import {
  deleteUnusedLayerStyles,
  deleteUnusedTextStyles
} from './delete-unused-styles'

export default function cleanStyles ({ isCleanDocument }) {
  const settings = getSettings({ keyPrefix: 'cleanStyles' })
  if (!checkSettings(settings)) {
    return
  }
  let count = 0
  if (settings.deleteUnusedLayerStyles) {
    count += deleteUnusedLayerStyles()
  }
  if (settings.deleteUnusedTextStyles) {
    count += deleteUnusedTextStyles()
  }
  if (isCleanDocument) {
    return
  }
  if (count === 0) {
    showMessage('No unused styles')
    return
  }
  showSuccessMessage(`Deleted ${count} unused style${count === 1 ? '' : 's'}`)
}
