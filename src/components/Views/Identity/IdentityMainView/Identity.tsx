/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { FunctionComponent, useEffect } from 'react'

import {
  SafeAreaView,
  Text,
  NativeModules,
  TouchableOpacity,
  NativeEventEmitter,
  StyleSheet,
} from 'react-native'
import getGeneralStyle from 'src/core/style'

import { ILoginState } from '../../Authen/root/models/interfaces/loginInfo'
import { IidentityState, IIdentityDispatchProps } from '../root/models/interfaces/identity'

const { JumioMobileSDK } = NativeModules

interface identityProps extends IIdentityDispatchProps {
  loginState: ILoginState
  identityState: IidentityState
}

const Identity: FunctionComponent<identityProps> = (props) => {
  const { identityState, loginState } = props

  const initJumio = async () => {
    const authorization_token = identityState.sdkToken
    const datacenter = 'US'
    const isRooted = await JumioMobileSDK.isRooted()

    if (!isRooted) {
      await JumioMobileSDK.initialize(authorization_token, datacenter)
      JumioMobileSDK.start()
    }
  }

  const emitterJumio = new NativeEventEmitter(JumioMobileSDK)
  emitterJumio.addListener('EventResult', (EventResult) =>
    console.warn('EventResult: ' + JSON.stringify(EventResult)),
  )
  emitterJumio.addListener('EventError', (EventError) =>
    console.warn('EventError: ' + JSON.stringify(EventError)),
  )

  useEffect(() => {
    props.getToken(loginState.pid)
  }, [])

  useEffect(() => {
    console.log('test.....', identityState.sdkToken)
  }, [identityState.sdkToken])

  return (
    <SafeAreaView style={styles.centerContainer}>
      <Text style={{ color: 'white' }}>Identity</Text>
      <TouchableOpacity style={styles.button} onPress={initJumio}>
        <Text>Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Identity

const styles = StyleSheet.create({
  ...getGeneralStyle(true),
  button: {
    borderRadius: 22,
    backgroundColor: '#ECA941',
    color: '#FFFFFF',
    paddingLeft: 120,
    paddingRight: 120,
    padding: 10,
    alignItems: 'center',
  },
})
