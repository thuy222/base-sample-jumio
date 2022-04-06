import { Navigation } from 'react-native-navigation'
import wrapComponentWithProvider from 'src/core/routes/registerWrapComponent'

import Login from '../../Login/container'
import Register from '../../Register'
import { routeId } from '../constants/routeId'
export default function registerAuthenComponent(): void {
  Navigation.registerComponent(
    routeId.loginMain,
    () => wrapComponentWithProvider(Login),
    () => Login,
  )
  Navigation.registerComponent(routeId.registerMain, () => Register)
}
