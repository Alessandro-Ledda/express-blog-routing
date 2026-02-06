const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// importazione router dei blogs
const blogRouter = require('./routers');

// attivazione cartella public per file statici
app.use(express.static('public'));

// istanza delle rotte per risorsa blog
app.use('/posts', blogRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})