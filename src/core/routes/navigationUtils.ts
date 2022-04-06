import {
  LayoutOrientation,
  Navigation,
  OptionsTopBarButton,
  OptionsTopBarTitle,
} from 'react-native-navigation'

export function pushScreenOnStack(
  pushScreenName: string,
  onComponentId: string,
  isHaveStatusBar = true,
  isHaveTopBar = true,
  isHaveBottomBar = true,
  orientation: LayoutOrientation[] = ['portrait'],
  topBarTitle: OptionsTopBarTitle | undefined = undefined,
  rightButtons: OptionsTopBarButton[] | undefined = undefined,
) {
  Navigation.push(onComponentId, {
    component: {
      name: pushScreenName,
      options: {
        statusBar: {
          visible: isHaveStatusBar,
          style: 'light',
          hideWithTopBar: true,
          blur: true,
        },
        topBar: {
          title: topBarTitle,
          rightButtons,
          visible: isHaveTopBar,
          drawBehind: true,
        },
        bottomTabs: {
          visible: isHaveBottomBar,
          drawBehind: true,
        },
        layout: {
          orientation,
        },
      },
    },
  })
}

export const setDefaultOption = () => {
  Navigation.setDefaultOptions({
    statusBar: {
      visible: false,
      style: 'light',
      hideWithTopBar: false,
      blur: false,
    },
    topBar: {
      visible: false,
      drawBehind: true,
      title: {
        color: 'white',
      },
      backButton: {
        color: 'blue',
      },
      background: {
        color: 'gold',
      },
    },
    layout: {
      orientation: ['portrait'],
    },
    bottomTab: {
      fontSize: 20,
      selectedFontSize: 24,
      iconColor: 'blue',
      selectedIconColor: 'black',
    },
    bottomTabs: {
      backgroundColor: '#FAFAFA',
    },
  })
}
