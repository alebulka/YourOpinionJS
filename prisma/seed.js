const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function clearDB(){
  await prisma.opinions.deleteMany({where:{}});
  await prisma.users.deleteMany({where:{}});
}

async function hashPassword(password) {
  return bcrypt.hash(password, saltRounds);
}

async function populateDB(){
  const hashedPassword1 = await hashPassword('teste123');
  const hashedPassword2 = await hashPassword('isso aqui é outro teste');
  const hashedPassword3 = await hashPassword('12345678');
  const hashedPassword4 = await hashPassword('ola')

  const userTeste= await prisma.users.create({
    data:{
      nome: 'Igor',
      email:'igor@gmail.com',
      cpf: 564,
      senha: hashedPassword4
    }
  })

  await prisma.users.createMany({
    data: [
      {nome:'Alessandra', email:'bulkalessandra@outlook.com', cpf:123, senha: hashedPassword1},
      {nome:'Paulo', email:'paulinho@gmail.com', cpf:234, senha: hashedPassword2},
      {nome:'Mayra', email:'maybulka@gmail.com', cpf:389, senha: hashedPassword3}
    ]
  })
  await prisma.opinions.createMany({
    data: [
      {title:'teste1', comment:'esse é um teste', published: true, authorId: userTeste.id},
/*       {title:'teste2', comment:'esse é um teste2', published: true, authorId: 2} */
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

