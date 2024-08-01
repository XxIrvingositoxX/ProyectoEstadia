import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import userRoutes from './routes/routes.js'
import colleagueRoutes from './routes/ColleagueRoutes.js'
import visitorRoutes from './routes/VisitorRoutes.js'
import keysRoutes from './routes/KeyRoutes.js'

const app = express();

app.use(cors())
app.use(express.json())

app.use('/users', userRoutes)
app.use('/colleagues', colleagueRoutes)
app.use('/visitors', visitorRoutes)
app.use('/keys', keysRoutes)


try {
    await db.authenticate()
    console.log('Conexión exitosa')
} catch (error) {
    console.log('Conexión rechazada')
}

app.listen(8000, ()=>{
    console.log("Server Run");
})