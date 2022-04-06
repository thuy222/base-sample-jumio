import yn from 'yn'
import Config from 'react-native-config'

const settings = {
  isTesting: yn(Config.IS_TESTING || 'no'),
}
export default settings
