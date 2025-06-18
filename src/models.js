const e = require('express');
const mongoose = require('mongoose');

//Definindo o schema do livro
const bookSchema = new mongoose.Schema({
    title:{type: String, },
    author: {type: String, },
    edition: {type: String, },
    anoPlucation: {type: Number, },
    numberPages: {type: Number, },
})

//Criando o modelo do livro
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;