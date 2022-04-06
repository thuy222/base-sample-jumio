import { StyleSheet } from 'react-native'

export const PrimaryColors = {
  backgroundColor: '#1A1A1A',
}
export const SecondaryColors = {
  backgroundColor: '#F2F2F2',
}
const getGeneralStyle = (isPrimary: boolean) => {
  const color = isPrimary ? PrimaryColors : SecondaryColors
  return StyleSheet.create({
    centerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isPrimary ? color.backgroundColor : color.backgroundColor,
    },
  })
}
export default getGeneralStyle
