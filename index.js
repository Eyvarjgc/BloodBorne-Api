import express  from "express";
const app = express()

// import { BossesModel } from "./models/bosses.js";

const PORT = process.env.PORT ?? 3000

import  bossesRouter   from './routers/bosses.js'
app.use('/bosses', bossesRouter)

app.use(express.static('public'))

import cors from "cors";
// app.use(cors({
//     origin:(origin, callback) => {
//         const ACCEPTED_ORIGINS = [
//             'http://localhost:8080',
//             'http://localhost:3000',
//             'https://log.com',
//             'http://127.0.0.1:5500/public/bosses.html'
//         ]

//         if(ACCEPTED_ORIGINS.includes(origin)){
//             return callback(null,true)
//         }
//         if(!origin){
//             return callback(null,true)

//         }

//         return callback(new Error(`Not allowed by cors`))
//     }
// }))
app.use(cors('*'))
app.listen(PORT, (req,res) => {
    console.log(`SERVER IS LISTENING ON PORT: \n http://localhost:${PORT}`);
})
