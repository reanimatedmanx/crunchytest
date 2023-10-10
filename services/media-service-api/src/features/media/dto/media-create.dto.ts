import { ApiProperty } from '@nestjs/swagger'
import { Prisma } from '@prisma/client'
import { Transform } from 'class-transformer'
import { IsNotEmpty, IsNumber } from 'class-validator'

export class MediaCreateDto implements Prisma.MediaCreateWithoutMediaTypeInput {
  @ApiProperty()
  title: string

  @ApiProperty()
  type: string

  @ApiProperty()
  genre: string

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
    return Number(value)
  })
  @ApiProperty()
  releaseYear: number

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
    return Number(value)
  })
  @ApiProperty()
  rating: number
}
