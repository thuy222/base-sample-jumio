import { Alert } from 'react-native'
import { GeneralNoInputAnyReturnType } from '../../../../core/models/types/generalFnTypes'

export default function ConfirmDialog(
  title: string,
  message: string,
  confirmText: string,
  confirmFn: GeneralNoInputAnyReturnType,
  cancelText: string,
  cancelFn: GeneralNoInputAnyReturnType,
) {
  return Alert.alert(title, message, [
    {
      text: confirmText,
      onPress: () => {
        confirmFn()
      },
    },
    {
      text: cancelText,
      onPress: () => {
        cancelFn()
      },
    },
  ])
}
