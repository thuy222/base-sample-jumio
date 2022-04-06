import IAuthenState from 'src/components/Views/Authen/root/models/interfaces/IAuthenState'
import identityInterface, {
  type,
} from 'src/components/Views/Identity/root/models/interfaces/identity'

interface IState {
  authenReducer: IAuthenState
  identityReducer: identityInterface[type.state]
}
export default IState
