import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  safeArea: { backgroundColor: 'black' },
  container: { height: '100%', width: '100%' },
  fullScreenBtn: {
    backgroundColor: 'transparent',
    height: 35,
    width: 90,
    position: 'absolute',
    right: 5,
    bottom: 0,
  },
  cancelFullScreenBtn: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 5,
    bottom: 10,
    height: 24,
    width: 110,
  },
  expandTxt: {
    color: 'white',
  },
  closeText: {
    color: 'white',
  },
})
export default styles
