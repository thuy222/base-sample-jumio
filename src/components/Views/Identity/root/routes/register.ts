import { Navigation } from 'react-native-navigation'
import wrapComponentWithProvider from 'src/core/routes/registerWrapComponent'

import Identity from '../../IdentityMainView/container'
import { routeId } from '../constants/routeId'

export default function registerIdentityComponent(): void {
  Navigation.registerComponent(routeId.identityMain, () => wrapComponentWithProvider(Identity))
}
