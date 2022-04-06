import { Alert } from 'react-native'
import { GeneralNoInputAnyReturnType } from 'src/core/models/types/generalFnTypes'

export default function AlertDialog(
  title: string,
  message: string,
  confirmText: string,
  confirmFn: GeneralNoInputAnyReturnType,
) {
  return Alert.alert(title, message, [
    {
      text: confirmText,
      onPress: () => {
        confirmFn()
      },
    },
  ])
}
