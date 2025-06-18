const express = require('express')
const Book = require('./models')
//Router do framework express
const routes = express.Router()

//cadastrar um livros
routes.post('/books', async(req, res)=>{
    try{
        const { title, author, edition, anoPublication, numberPages } = req.body;
       // Verifica se todos os campos obrigatórios foram preenchidos
        if(!title || !author || !edition ||! anoPublication || !numberPages) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }
        const book = new Book ({title, author, edition, anoPublication, numberPages});
        await book.save();
    res.status(201).json({ message: 'Livro cadastrado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar livro.' });
    }
});
//Listar todos os livros
routes.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar livros.' });
    }
});

//Consulta de livro por ID
routes.get('/books/:id', async (req, res) => {
    try {
        const books = await Book.findById(req.params.id);
        if (!books) {
            return res.status(404).json({ error: 'Livro não encontrado.' });
        }
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar livros.' });
    }
});

//Remover um livro
routes.delete('/books/:id', async (req, res)=> {
    try{
        const book = await Book.findByIdAndDelete(req.params.id);

        if(!book){
            return res.status(404).json({error: 'Livro não econtrado'});
            }
            res.status(200).json({message: ' Livro removido com sucesso!'});
    }catch(error){
    res.status(500).json({message:'Erro ao remover livro.'});
    }
});
module.exports = routes;