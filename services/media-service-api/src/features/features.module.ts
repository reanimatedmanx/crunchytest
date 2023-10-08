import { Module } from '@nestjs/common'
import { MediaModule } from './media/media.module'

@Module({
  imports: [MediaModule],
  exports: [MediaModule],
})
export class FeaturesModule {}
