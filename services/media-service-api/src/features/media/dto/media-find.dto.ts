import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';

const DEFAULT_PAGE_SIZE = 100;

export class MediaFindDto {
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
    return Number(value);
  })
  @ApiProperty({
    default: 0,
    description: 'Page number starting from 0',
  })
  page: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Transform(({ value }) => {
    return Number(value);
  })
  @ApiProperty({
    required: false,
    default: DEFAULT_PAGE_SIZE,
    description: 'Page size, min value 1',
  })
  size?: number = DEFAULT_PAGE_SIZE;

  @ApiProperty({
    required: false,
  })
  title?: string;

  @ApiProperty({
    required: false,
  })
  type?: string;
}
