const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '/dist')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Connected to Port ${8080}`); //Listening on port 4201
});