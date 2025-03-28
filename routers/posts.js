// express
const express = require('express');
const router = express.Router();

// collegamento alla lista dei post
const postsArray = require('../data/posts-array');

// index
router.get('/', (req, res) => {
    res.json(postsArray);
});

// show
router.get('/:id', (req, res) => {
    const {id} = req.params
    const currentPost = postsArray.find(post => post.slug === id);
    res.json(currentPost);
})

// store
router.post('/', (req, res) => {
    res.send('Creazione nuovo post');
})

// update
router.put('/:id', (req, res) => {
    const {id} = req.params;
    res.send('Modifica integrale dei post ' + id);
})

// modify
router.patch('/:id', (req, res) => {
    const {id} = req.params;
    res.send('Modifica parziale dei post ' + id);
})

// destroy
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.send('Eliminazione del post ' + id);
})

// esportare router
module.exports = router;