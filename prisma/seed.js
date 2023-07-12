const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const pessoa1 = await prisma.user.upsert({
    where: { email: '' },
    update: {},
    create: {
      email: '',
      name: '',
      posts: {
        create: {
          title: '',
          content: '',
          published: true,
        },
      },
    },
  })

  const pessoa2 = await prisma.user.upsert({
    where: { email: '' },
    update: {},
    create: {
      email: '',
      name: '',
      posts: {
        create: [
          {
            title: '',
            content: '',
            published: true,
          },
          {
            title: '',
            content: '',
            published: true,
          },
        ],
      },
    },
  })
  console.log({ pessoa1, pessoa2 })
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