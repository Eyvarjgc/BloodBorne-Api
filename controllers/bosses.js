import {getJson} from '../modules/utils.js'
const bosses = getJson('../data/data.json')

import { BossesModel } from "../models/bosses.js";
import {postValidation, patchPartialValidation} from '../schema/bosses.js'

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
      result:result
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

  static async patchData(req,res){
    const {id} = req.params
    const body = req.body
    const result =  patchPartialValidation(body)

    if(result.error){
      return res.status(400).send({
        success:false,
        message:JSON.parse(result.error.message)
      })
    }

    const updateData = await BossesModel.patchData(id,body)
    if(!updateData){
      return res.status(404).send({
        success:false,
        message:`ID Item ${id} not found`,
      })
    }

    res.status(200).send({
      success:true,
      message:`ID Item ${id} has changed`,
      data:updateData
    })
  }

  static async deleteData(req,res){
    const {id} = req.params
    const deleteData = await BossesModel.delete(id)
    if(!deleteData){
      return res.status(400).send({
        success:false,
        message:`ID item ${id} not found`
      })
    }

    res.status(200).send({
      success:true,
      message:`ID Item ${id} DELETED`,
      data:deleteData
    })
  }
}
