const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    res.send('Hello World!')
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, '/form.html'));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})