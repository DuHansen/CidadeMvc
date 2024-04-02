const express = require('express');
const CidadeApi = require('./src/controller/api/Cidade');

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ response: 'Hello World!' });
})
const cidadeApi = new CidadeApi();

app.get('/cidades', cidadeApi.listarCidade);
app.post('/cidades', cidadeApi.criarCidade);
app.put('/cidades/:id', cidadeApi.alterarCidade);
app.delete('/cidades/:id', cidadeApi.deletarCidade);

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

