import { Navigation } from 'react-native-navigation'
import Chart from '../../ChartView'
import { routeId } from '../constants/routeId'

export default function registerChartComponent(): void {
  Navigation.registerComponent(routeId.chartMain, () => Chart)
}
