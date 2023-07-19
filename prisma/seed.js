const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function clearDB(){
  await prisma.opinions.deleteMany({where:{}}),
  await prisma.users.deleteMany({where:{}})
}
async function populateDB(){
  await prisma.users.createMany({
    data: [
      {id: 1, nome:'Alessandra', email:'alessandrabulkar@gmail.com', cpf:123, senha: 'teste123'},
      {id: 2, nome:'Paulo', email:'paulinho@gmail.com', cpf:234, senha: 'teste123'},
    ]
  })
  await prisma.opinions.createMany({
    data: [
      {title:'teste1', comment:'esse é um teste', published: true, authorId: 1},
      {title:'teste2', comment:'esse é um teste2', published: true, authorId: 2}
    ]
  })
}
async function main() {
    await clearDB()
    await populateDB()
}
if (process.env.NODE_ENV !== 'test') {
    main()
      .catch((error) => {
        console.error(error);
        process.exit(1);
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }