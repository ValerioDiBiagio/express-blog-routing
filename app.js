// express
const express = require('express');
const app = express();

// porta
const port = 3000;
app.listen(port,() => {
    console.log('sono un server attivo sulla porta ' + port);
})

// router
const postsRouter = require('./routers/posts');
app.use('/posts', postsRouter);

// asset statici
app.use(express.static('public'));


// pagina iniziale
app.get('/', (req, res) => {
    res.send('Homepage');
})



