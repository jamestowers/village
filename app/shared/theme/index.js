import spacing from './spacing'
import colors, { palette } from './colors'
import typography from './type'
import borders from './borders'
import misc from './misc'

const theme = {
  borders,
  colors,
  palette,
  spacing,
  type: typography,
  ...misc
}

export default theme
