import axios, { AxiosInstance } from 'axios'

export class MediaApiClient {
  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_MEDIA_API_URL,
      headers: {},
    })
  }

  getHealthcheck() {
    return this.instance.get('/healthcheck')
  }
}
