/**
 * @format
 */
import { Navigation } from 'react-native-navigation'
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import StorybookUIRoot from './storybook'

import settings from './src/core/settings'
import registerAllComponent from './src/core/routes/registerComponent'
import { setDefaultOption } from './src/core/routes/navigationUtils'
import registerAllEvents from './src/core/routes/events'

if (settings.isTesting) {
  AppRegistry.registerComponent(appName, () => {
    return StorybookUIRoot
  })
} else {
  registerAllComponent()
  registerAllEvents()
  setDefaultOption()
  // set base component
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: appName,
        },
      },
    })
  })
}
