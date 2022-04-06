import React, { useEffect, useState } from 'react'

import analytics from '@react-native-firebase/analytics'
import { View, SafeAreaView, Text } from 'react-native'
import Orientation from 'react-native-orientation'
import { WebView } from 'react-native-webview'
import Button from 'src/components/Common/Button'

import { testIds } from '../root/constants/testId'
import styles from './styles'

const Chart = () => {
  useEffect(() => {
    Orientation.addOrientationListener(orientationDidChange)
  }, [])
  const [isPortrait, setIsPortrait] = useState(true)
  const orientationDidChange = (orientation: Orientation.orientation) => {
    if (orientation === 'LANDSCAPE') {
      setIsPortrait(false)
    } else {
      setIsPortrait(true)
    }
  }
  const changeModeBtnClick = async () => {
    if (isPortrait) {
      Orientation.lockToLandscape()
      Orientation.unlockAllOrientations()
    } else {
      Orientation.lockToPortrait()
    }
    await analytics().logEvent('chart', {
      isEnterFullScreen: isPortrait,
    })
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <WebView originWhitelist={['*']} source={{ uri: 'https://poc.chart.fusang.co/' }} />
        <Button
          btnStyle={isPortrait ? styles.fullScreenBtn : styles.cancelFullScreenBtn}
          testId={testIds.changeModeBtn}
          onPress={changeModeBtnClick}
        >
          <>
            {isPortrait && <Text style={styles.expandTxt}>→ Full Screen</Text>}
            {!isPortrait && <Text style={styles.closeText}> Exist Full Screen</Text>}
          </>
        </Button>
      </View>
    </SafeAreaView>
  )
}
export default Chart
