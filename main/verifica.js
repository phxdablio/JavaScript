const express = require('express')
const app = express()
const path = require('path')

const PORT =  process.env.PORT || 3000

//DEFINE UM DIRETORIO PUBLICO PAR SERVIR ARQUIVOS ESTATICOS 
app.use(express.static(path.join(__dirname, 'main')))
//Rota para o arquivo HTML 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main','index.html'));
});
app.listen(PORT, () => {console.log(`servidor rodando na porta ${PORT}`)})