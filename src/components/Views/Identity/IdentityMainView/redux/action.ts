import { GetTokenAction } from './types'

export const getToken = (payload: string | undefined) => {
  return GetTokenAction(payload)
}
