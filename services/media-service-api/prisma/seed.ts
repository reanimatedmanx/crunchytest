import { MediaType } from '../src/shared/enums'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // #region Seed MediaType
  Object.values(MediaType).forEach(async (name) => {
    await prisma.mediaType.upsert({
      where: { name },
      update: {},
      create: {
        name,
      },
    })
  })

  // #endregion

  // #region Seed Media
  await prisma.media.upsert({
    where: { title: 'One Piece' },
    update: {},
    create: {
      title: 'One Piece',
      mediaType: {
        connectOrCreate: {
          create: {
            name: MediaType.TVShow,
          },
          where: {
            name: MediaType.TVShow,
          },
        },
      },
      genre: 'Comedy',
      releaseYear: 1999,
      rating: 10,
    },
  })
  // #endregion
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
