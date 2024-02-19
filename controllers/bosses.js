import {getJson} from '../modules/utils.js'
const bosses = getJson('../data/data.json')

import { BossesModel } from "../models/bosses.js";
import {postValidation} from '../schema/bosses.js'

export class BossesController{
  static async getAll(req,res){
    const {location, drops } = req.query
    const result = await BossesModel.getAll(location,drops)

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

  static async postData(req,res){
		const body = req.body
		console.log(body);

		const result = postValidation(body)

		if(result.error){
			return res.status(404).send({
				success:false,
				message:JSON.parse(result.error.message)
			})}

		const newData = await BossesModel.postData(result.data)

		res.status(201).send({
      success:true,
      data:[bosses,newData]
  })
  }
}
