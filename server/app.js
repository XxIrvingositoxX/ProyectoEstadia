import express from 'express'
import cors from 'cors'
import db from './database/db'
import userRoutes from './routes/routes'

const app = express();

app.get('/', (req, res)=> {
    res.send('Hola mundo')
})