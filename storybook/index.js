// if you use expo remove this line
import { Platform } from 'react-native'
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { loadStories } from './storyLoader'
import './rn-addons'

// enables knobs for all stories
addDecorator(withKnobs)

// import stories
configure(() => {
  loadStories()
}, module)

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  host: Platform.OS === 'android' ? '10.0.2.2' : '0.0.0.0',
  // Add the line below
  asyncStorage: AsyncStorage,
})

export default StorybookUIRoot
