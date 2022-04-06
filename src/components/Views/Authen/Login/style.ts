import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
  },
  labels: {
    color: '#FAFAFA',
  },
  errorText: {
    color: 'red',
    height: 20,
  },
  input: {
    width: 200,
    height: 35,
    color: '#1A1A1A',
    backgroundColor: '#FAFAFA',
    borderRadius: 2,
  },
  submitBtn: {
    width: 100,
    height: 30,
    borderRadius: 10,
    position: 'absolute',
    right: 0,
    backgroundColor: '#FBBD01',
    color: '#FAFAFA',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerBtn: { width: 70, color: '#0346FE' },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
  },
})
export default styles
