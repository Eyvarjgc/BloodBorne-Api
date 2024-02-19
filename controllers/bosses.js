import {getJson} from '../modules/utils.js'
const bosses = getJson('../data/data.json')

import { BossesModel } from "../models/bosses.js";


export class BossesController{
  static async getAll(req,res){
    const {location, drops } = req.query
    const result = await BossesModel.getAll(location,drops)



    res.status(200).send({
      success:true,
      data:result
  })
  }

  static async getById(req,res){
    const {id} = req.params
    const result = await BossesModel.getById(id)

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

  }


}
