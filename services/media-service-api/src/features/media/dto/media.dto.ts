import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class MediaDto implements Prisma.MediaCreateInput {
  @ApiProperty()
  title: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  genre: string;

  @ApiProperty()
  releaseYear: number;

  @ApiProperty()
  rating: number;

  constructor(data: Partial<MediaDto>) {
    Object.assign(this, data);
  }
}
