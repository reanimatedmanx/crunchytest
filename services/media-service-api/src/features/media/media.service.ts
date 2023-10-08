import { Injectable } from '@nestjs/common'
import { PrismaService } from '@app/shared/services/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class MediaService {
  constructor(private prisma: PrismaService) {}

  async createMedia(args: Prisma.MediaCreateArgs) {
    return this.prisma.media.create(args)
  }

  async readMedia(args: Prisma.MediaFindUniqueArgs) {
    return this.prisma.media.findUnique(args)
  }

  async updateMedia(args: Prisma.MediaUpdateArgs) {
    return this.prisma.media.update(args)
  }

  async deleteMedia(args: Prisma.MediaDeleteArgs) {
    return this.prisma.media.delete(args)
  }

  async findMedia(args: Prisma.MediaFindManyArgs) {
    return this.prisma.media.findMany(args)
  }
}
