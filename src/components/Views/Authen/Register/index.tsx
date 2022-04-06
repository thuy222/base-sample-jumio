import getGeneralStyle from 'src/core/style'
import React, { Component } from 'react'
import { SafeAreaView, Text } from 'react-native'

export default class Register extends Component {
  render() {
    return (
      <SafeAreaView style={styles.centerContainer}>
        <Text style={{ color: 'white' }}>Register</Text>
      </SafeAreaView>
    )
  }
}

const styles = getGeneralStyle(true)
