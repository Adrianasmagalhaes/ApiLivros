const express = require('express');
const mongoose = require('mongoose');   
const routes = require('./routes');

const app = express();


// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb+srv://adrianasousa219:123asm@livroapi.gviftnr.mongodb.net/?retryWrites=true&w=majority&appName=LivroApi', {
    
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err.message);
});

//mddleware para permitir o uso de JSON
app.use(express.json());

//Usando as rotas definidas no arquivo routes.js
app.use('/api', routes);

//inicializando as rotas
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
})