import axios, { AxiosInstance } from 'axios'

/**
 * TODO: Should be ideally provided by the SDK,
 * generated based on OpenAPI schema, or else.
 */
export interface Media {
  title: string
  type: string
  genre: string
  releaseYear: number
  rating: number
}

export class FindMediaQuery {
  page: number = 0
  size: number = 100
  title?: string
  type?: string

  constructor(input?: Partial<FindMediaQuery>) {
    Object.assign(this, input)
  }
}

export class MediaApiClient {
  private static client: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_MEDIA_API_URL,
    headers: {},
  })

  static getHealthcheck() {
    return MediaApiClient.client.get('/healthcheck')
  }

  static findMedia(query?: FindMediaQuery) {
    return MediaApiClient.client.get('/media/find', {
      params: {
        ...new FindMediaQuery(),
        ...query,
      },
    })
  }
}
