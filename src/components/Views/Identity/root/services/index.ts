/* eslint-disable import/no-named-as-default */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios'
import Config from 'react-native-config'

export const getToken = async (pid: string): Promise<AxiosResponse> => {
  try {
    const url = `${Config.FDI_URL}/jumio/identity/${pid}/sdkToken`
    const response = await axios.get(url)
    return response
  } catch (err: any) {
    throw err.response.data
  }
}
