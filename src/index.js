const express = require('express');
const routes = express.Router();
// constante reponsável pela api:
const app = express();
app.use(express.json());

const port = 3353;
app.listen(port, ()=>{
    console.log(`meu servidor esstá rodando na porta ${port}`)
})

app.get('/',(request, response) => {
    console.log('OLá mmundo!');
    response.send('Olá mundo!');
})