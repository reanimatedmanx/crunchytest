import axios, { AxiosInstance } from 'axios'

export class MediaApiClient {
  private static client: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_MEDIA_API_URL,
    headers: {},
  })

  static getHealthcheck() {
    return MediaApiClient.client.get('/healthcheck')
  }
}
