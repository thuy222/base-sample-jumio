import { Navigation } from 'react-native-navigation'
import Profiles from '../../ProfileMainView'
import { routeId } from '../constants/routeId'

export default function registerProfilesComponent(): void {
  Navigation.registerComponent(routeId.profileMain, () => Profiles)
}
