import express  from "express";
const app = express()

// import { BossesModel } from "./models/bosses.js";

const PORT = process.env.PORT ?? 3000

import  bossesRouter   from './routers/bosses.js'
app.use('/bosses', bossesRouter)




app.listen(PORT, (req,res) => {
    console.log(`SERVER IS LISTENING ON PORT: \n http://localhost:${PORT}`);
})
