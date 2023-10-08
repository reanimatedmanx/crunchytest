import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/shared/services/prisma.service';

@Injectable()
export class MediaService {
  constructor(private prisma: PrismaService) {}

  async createMedia() {
    return {};
  }

  async readMedia() {
    return [];
  }

  async updateMedia() {
    return {};
  }

  async deleteMedia() {
    return {};
  }
}
