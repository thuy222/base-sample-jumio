import { Navigation } from 'react-native-navigation'
import Orientation from 'react-native-orientation'

export default function registerAllEvents(): void {
  Navigation.events().registerBottomTabSelectedListener(() => {
    Orientation.getOrientation((err, orientation) => {
      if (orientation !== 'PORTRAIT') {
        Orientation.lockToPortrait()
      }
    })
  })
}
