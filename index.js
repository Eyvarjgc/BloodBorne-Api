import express  from "express";
const app = express()

import { BossesModel } from "./models/bosses.js";

const PORT = process.env.PORT ?? 3000

app.get('/bosses', async(req,res) => {
    const result = await BossesModel.getAll()

    res.json(result)
})

app.get('/bosses/:id', async(req,res) => {
    const {id} = req.params
    const result = await BossesModel.getById({id})

    if(result == false){
        return res.status(404).send({
            success:false,
            message:`Error Item Id '${id}' Not Found`
        })
    }

    res.status(200).send({
        success:true,
        data:result
    })
})

app.get('/ds', async(req,res) => {
    const { location, drops } = req.query
    const result = await BossesModel.getBylocationAndDrops({ location, drops})
    if(result == false){
        return res.status(404).send({
            success:false,
            message:`Error Item Not Found`
        })
    }

    res.status(200).send({
        success:true,
        data:result
    })
})




app.listen(PORT, (req,res) => {
    console.log(`SERVER IS LISTENING ON PORT: \n http://localhost:${PORT}`);
})
