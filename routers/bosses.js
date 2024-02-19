import express  from "express";
const bossesRouter = express.Router()

import { BossesModel } from "../models/bosses.js";
import  {BossesController}  from "../controllers/bosses.js";

bossesRouter.get('', BossesController.getAll)

bossesRouter.get('/:id', BossesController.getById)




export default bossesRouter

