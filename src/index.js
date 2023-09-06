const express = require('express');
const routes = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
// constante reponsável pela api:
const app = express();
app.use(express.json());

const prisma=require('../prisma/prisma.js')

const port = 3353;
app.listen(port, ()=>{
    console.log(`meu servidor esstá rodando na porta ${port}`)
    // essa função anonima serve apenas para o console.log
})

async function hashPassword(password) {
    return bcrypt.hash(password, saltRounds);
  }

app.get('/',(request, response) => {
    console.log('mensagem diferente');
    response.send('Olá mundo!');
})

app.get('/users', async (request, response) =>{
    const users= await prisma.users.findMany({
        select:{
            id:true,
            nome:true,
            email:true,
/*             cpf:false,
            senha:false */
        }
    })
    response.send(users)
})

app.get('/users/:userId', async (request, response)=> {
    const {userId}= request.params
    const user= await prisma.users.findUnique({
        where:{
            id:Number(userId)
        },
        select:{
            id:true,
            nome:true,
            email:true
        }
    })
    response.send(user)
})

app.post('/users', async (request, response) =>{
    const {nome, email, cpf, senha}=request.body
    const newUser = await prisma.users.create({
        data:{
            nome,
            email,
            cpf: Number(cpf),
            senha:await hashPassword(senha)
        }
    })
    response.send(newUser)
})