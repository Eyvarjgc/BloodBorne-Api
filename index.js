import express  from "express";
const app = express()

import cors from "cors";
app.use(cors())

const PORT = process.env.PORT ?? 3000


app.get('/api', (req,res) => {
    res.json(
        {"Bosses": "https://bloodborne-simple-api-dev-sdqb.2.us-1.fl0.io/api/bosses",
        "Charactes": "https://bloodborne-simple-api-dev-sdqb.2.us-1.fl0.io/api/characters"
    
        })
})

import  bossesRouter   from './routers/bosses.js'
app.use('/api/bosses', bossesRouter)

app.use(express.static('public'))



app.listen(PORT, (req,res) => {
    console.log(`SERVER IS LISTENING ON PORT: \n http://localhost:${PORT}`);
})
