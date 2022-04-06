import React from 'react'
import PropTypes from 'prop-types'
import { StyleProp, TouchableHighlight, ViewStyle } from 'react-native'
import { GeneralNoInputAnyReturnType } from 'src/core/models/types/generalFnTypes'

interface IButtonProps {
  onPress: GeneralNoInputAnyReturnType
  btnStyle: StyleProp<ViewStyle>
  children: JSX.Element
  testId: string
}
export default function Button(props: IButtonProps): JSX.Element {
  return (
    <TouchableHighlight onPress={props.onPress} style={props.btnStyle} testID={props.testId}>
      {props.children}
    </TouchableHighlight>
  )
}

Button.defaultProps = {
  children: null,
  btnStyle: { backgroundColor: 'blue', color: 'white' },
  onPress: () => {},
  testId: '',
}

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  btnStyle: PropTypes.object,
  testId: PropTypes.string,
}
