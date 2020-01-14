import 'dotenv/config'
import express from 'express'
import routes from './routes'

//Conexao com o Banco
import './database'

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333, () => {
    console.log('Server is runing on http://localhost:3333')
})
