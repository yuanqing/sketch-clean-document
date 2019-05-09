const keys = ['width', 'height', 'x', 'y']

export default function roundToNearestPixel (layer) {
  keys.forEach(function(key) {
    layer.frame[key] = Math.round(layer.frame[key])
  })
}
