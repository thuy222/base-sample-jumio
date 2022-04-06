import { Navigation } from 'react-native-navigation'
import { pushScreenOnStack } from 'src/core/routes/navigationUtils'

import { routeId, stakeId } from './../constants/routeId'

export const goToLogin = (): void => {
  Navigation.setRoot({
    root: {
      stack: {
        id: stakeId.loginStake,
        children: [
          {
            component: {
              name: routeId.loginMain,
            },
          },
        ],
      },
    },
  })
}
export const goToRegister = (currentComponentId: string): void => {
  pushScreenOnStack(routeId.registerMain, currentComponentId, true, true)
}
