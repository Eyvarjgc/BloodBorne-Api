import express  from "express";
const bossesRouter = express.Router()

import { BossesModel } from "../models/bosses.js";
import  {BossesController}  from "../controllers/bosses.js";

bossesRouter.use(express.json())

bossesRouter.get('', BossesController.getAll)

bossesRouter.get('/:id', BossesController.getById)

bossesRouter.post('', BossesController.postData)


export default bossesRouter

