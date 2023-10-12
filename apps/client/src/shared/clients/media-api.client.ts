import axios, { AxiosInstance } from 'axios'

/**
 * TODO: Should be ideally provided by the SDK,
 * generated based on OpenAPI schema, or else.
 */
export class Media {
  id!: string
  title!: string
  type!: 'game' | 'tv-show' | 'movie'
  genre!: string
  releaseYear!: number
  rating!: number
}

export class CreateMediaDto implements Omit<Media, 'id'> {
  title!: string
  type!: 'game' | 'tv-show' | 'movie'
  genre!: string
  releaseYear!: number
  rating!: number

  constructor(input?: Partial<CreateMediaDto>) {
    Object.assign(this, input)
  }
}

export class FindMediaDto {
  page: number = 0
  size: number = 100
  title?: string
  type?: string

  constructor(input?: Partial<FindMediaDto>) {
    Object.assign(this, input)
  }
}

export class UpdateMediaDto implements Omit<Media, 'id'> {
  title!: string
  type!: 'game' | 'tv-show' | 'movie'
  genre!: string
  releaseYear!: number
  rating!: number

  constructor(input?: Partial<UpdateMediaDto>) {
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

  static createMedia(dto?: CreateMediaDto) {
    return MediaApiClient.client.post('/media', dto)
  }

  static findMedia(dto?: FindMediaDto) {
    return MediaApiClient.client.get('/media/find', {
      params: {
        ...new FindMediaDto(),
        ...dto,
      },
    })
  }

  static readMedia(id: string) {
    return MediaApiClient.client.get(`/media/${id}`)
  }

  static updateMedia(id: string, dto: UpdateMediaDto) {
    return MediaApiClient.client.put(`/media/${id}`, dto)
  }

  static deleteMedia(id: string) {
    return MediaApiClient.client.delete(`/media/${id}`)
  }
}
