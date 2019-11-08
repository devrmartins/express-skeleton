import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({hello: 'World'});
})

app.listen(3333, () => {
    console.log('Server is runing on http://localhost:3333');
})