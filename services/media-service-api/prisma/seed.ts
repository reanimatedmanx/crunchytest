import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const data = await prisma.media.upsert({
    where: { title: 'One Piece' },
    update: {},
    create: {
      title: 'One Piece',
      // TODO Change this to an enum.
      type: 'Movie',
      genre: 'Comedy',
      releaseYear: 1999,
      rating: 10,
    },
  });

  console.log({ data });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
