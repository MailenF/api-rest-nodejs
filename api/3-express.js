const express = require('express');
const ditto = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 1234;

const app = express();
app.disable('x-powered-by');

app.use(express.json());

// app.use((req, res, next) => {
//     if(req.method !== 'POST') return next();
//     if(req.headers['content-type'] !== 'application/json') return next();
//
//     //Sólo llegan req que son POST y tienen el header content-type: application/json
//
//     let body = '';
//     //escuchar el evento data
//     req.on('data', chunk => {
//         body += chunk.toString();
//     })
//
//     req.on('end', () => {
//         const data = JSON.parse(body);
//         //mutar la req y meter la información en el req.body
//         req.body = data;
//         next();
//     });
// });

app.get('/pokemon/ditto', (req, res ) => {
    res.json(ditto);
});


app.post('/pokemon', (req, res) => {
        res.status(200).json(req.body);
});


app.use((req, res) => {
    res.status(404).send('<h1>404</h1>');
});


app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
});
