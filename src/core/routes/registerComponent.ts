import App from '../../APP'
import { Navigation } from 'react-native-navigation'
import { name as appName } from '../../../app.json'
import registerAuthenComponent from 'src/components/Views/Authen/root/routes/register'
import registerProfilesComponent from 'src/components/Views/Profile/root/routes/register'
import registerIdentityComponent from 'src/components/Views/Identity/root/routes/register'
import registerChartComponent from 'src/components/Views/Chart/root/routes/register'
import wrapComponentWithProvider from './registerWrapComponent'

export default function registerAllComponent(): void {
  Navigation.registerComponent(
    appName,
    () => wrapComponentWithProvider(App),
    () => App,
  )
  registerAuthenComponent()
  registerProfilesComponent()
  registerIdentityComponent()
  registerChartComponent()
}
