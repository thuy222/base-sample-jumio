export enum type {
  state = 'STATE',
  getTokenResponse = 'GET_TOKEN_RESPONSE',
  getTokenRequest = 'GET_TOKEN_REQUEST',
  dispatch = 'DISPATCH',
}
export default interface identityInterface {
  [type.state]: IidentityState
  [type.getTokenResponse]: IGetTokenResponse
  [type.getTokenRequest]: IGetTokenRequest
  [type.dispatch]: IIdentityDispatchProps
}
interface IGetTokenRequest {
  pid?: string
}
export interface IidentityState {
  sdkToken: string
  data: object
  status: string
  error?: Error | string
}
interface IGetTokenResponse {
  account: object
  web: object
  sdk: object
  workflowExecution: object
}

export interface IIdentityDispatchProps {
  getToken(payload?: string | undefined): void
}
