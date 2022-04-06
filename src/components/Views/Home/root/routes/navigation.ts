import { Navigation, Options } from 'react-native-navigation'
import * as profileRouteIds from 'src/components/Views/Profile/root/constants/routeId'
import * as identityRouteIds from 'src/components/Views/Identity/root/constants/routeId'
import * as chartRouteIds from 'src/components/Views/Chart/root/constants/routeId'

const defaultComponentOption: Options = {
  topBar: {
    visible: false,
    drawBehind: true,
  },
}
export const goToHome = (): void => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              id: profileRouteIds.stakeId.profileStake,
              children: [
                {
                  component: {
                    name: profileRouteIds.routeId.profileMain,
                    options: {
                      ...defaultComponentOption,
                      bottomTab: {
                        icon: require('../../../../../../assets/person.png'),
                      },
                    },
                  },
                },
              ],
            },
          },
          {
            stack: {
              id: identityRouteIds.stakeId.identityStake,
              children: [
                {
                  component: {
                    name: identityRouteIds.routeId.identityMain,
                    options: {
                      ...defaultComponentOption,
                      bottomTab: {
                        icon: require('../../../../../../assets/id_card.png'),
                      },
                    },
                  },
                },
              ],
            },
          },
          {
            component: {
              name: chartRouteIds.routeId.chartMain,
              options: {
                ...defaultComponentOption,
                bottomTab: {
                  icon: require('../../../../../../assets/chart.png'),
                },
                layout: {
                  orientation: ['portrait', 'landscape'],
                },
              },
            },
          },
        ],
      },
    },
  })
}
