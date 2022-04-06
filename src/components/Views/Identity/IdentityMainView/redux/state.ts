import identityInterface, { type } from '../../root/models/interfaces/identity'

export const identityStatus: identityInterface[type.state] = {
  sdkToken: '',
  status: '',
  data: {},
  error: undefined,
}
