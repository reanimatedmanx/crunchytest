import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { MediaService } from './media.service'
import { MediaDto, MediaCreateDto, MediaUpdateDto, MediaDeleteDto } from './dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { MediaFindDto } from './dto/media-find.dto'

@Controller('media')
@ApiTags('Media')
export class MediaController {
  constructor(private mediaService: MediaService) {}

  @Post()
  @Header('Cache-Control', 'none')
  @ApiOkResponse({
    description: `The created \`${MediaDto.name}\` record`,
    type: MediaDto,
  })
  async createMedia(@Body() body: MediaCreateDto) {
    return this.mediaService.createMedia({
      data: body,
    })
  }

  @Get('find')
  @ApiOkResponse({
    description: `The updated \`${MediaDto.name}\` record`,
    type: [MediaDto],
  })
  async findMedia(@Query() query: MediaFindDto) {
    return this.mediaService.findMedia({
      skip: query.page,
      take: query.size,
      where: {
        ...(query.title
          ? {
              title: {
                contains: query.title,
              },
            }
          : {}),
        ...(query.type
          ? {
              type: query.type,
            }
          : {}),
      },
    })
  }

  @Get(':id')
  @ApiOkResponse({
    description: `The found \`${MediaDto.name}\` record`,
    type: MediaDto,
  })
  async readMedia(@Param('id') id: number) {
    return this.mediaService.readMedia({
      where: {
        id,
      },
    })
  }

  @Put(':id')
  @Header('Cache-Control', 'none')
  @ApiOkResponse({
    description: `The updated \`${MediaDto.name}\` record`,
    type: MediaDto,
  })
  async updateMedia(@Param('id') id: number, @Body() body: MediaUpdateDto) {
    return this.mediaService.updateMedia({
      data: body,
      where: {
        id,
      },
    })
  }

  @Delete(':id')
  @Header('Cache-Control', 'none')
  async deleteMedia(@Query() query: MediaDeleteDto) {
    return this.mediaService.deleteMedia({
      where: {
        id: query.id,
      },
    })
  }
}
