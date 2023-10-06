import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
  constructor(private mediaService: MediaService) {}

  @Post()
  async createMedia() {
    return this.mediaService.createMedia();
  }
  @Get()
  async readMedia() {
    return this.mediaService.readMedia();
  }

  @Put()
  async updateMedia() {
    return this.mediaService.updateMedia();
  }

  @Delete()
  async deleteMedia() {
    return this.mediaService.deleteMedia();
  }
}
