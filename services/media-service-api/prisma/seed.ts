import { MediaType } from '../src/shared/enums'
import { Media, PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function* seeds() {
  for (let id = 1; id <= Number(process.env.SEED_COUNT) ?? 0; id++) {
    yield {
      id,
      title: `${faker.music.songName()} ${faker.hacker.verb()} ${
        faker.string.uuid().split('-')[0]
      } `,
      genre: faker.music.genre(),
      type: Object.values(MediaType)[faker.number.int({ min: 0, max: 2 })],
      rating: faker.number.int({ min: 0, max: 10 }),
      releaseYear: faker.defaultRefDate().getFullYear(),
    } satisfies Media
  }
}

async function main() {
  // #region Seed MediaType
  for await (const typeName of Object.values(MediaType)) {
    await prisma.mediaType.create({
      data: {
        name: typeName,
      },
    })
  }

  // #endregion

  // #region Seed Media

  for await (const seed of seeds()) {
    await prisma.media.create({
      data: {
        title: seed.title,
        mediaType: {
          connect: {
            name: seed.type,
          },
        },
        genre: seed.genre,
        rating: seed.rating,
        releaseYear: seed.releaseYear,
      },
    })
  }

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
