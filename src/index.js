const express = require('express');
const routes = express.Router();
// constante reponsável pela api:
const app = express();
app.use(express.json());

const port = 3353;
app.listen(port, ()=>{
    console.log(`meu servidor esstá rodando na porta ${port}`)
    // essa função anonima serve apenas para o console.log
})

app.get('/',(request, response) => {
    console.log('mensagem diferente');
    response.send('Olá mundo!');
})