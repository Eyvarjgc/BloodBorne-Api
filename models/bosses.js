import {getJson} from '../modules/utils.js'
const bosses = getJson('../data/data.json')

export class BossesModel{
    static async getAll(){
        return bosses
    }
    static async getById({id}){
        const findIndex = bosses.find((data) => data.id == Number(id))
        
        if(!id) return false

        return findIndex

    }
    static async getBylocationAndDrops({location,drops}){
				if(location){
						const locationFound = bosses.filter((data)=> {
								const locationUpper = data.location.toLocaleLowerCase() == location.toLocaleLowerCase()
		
								return locationUpper
		
						})
						return locationFound
				}
				
				if(drops){
					const dropFound = bosses.filter((data) => {
						// const dropUpper = data.drops.toLocaleLowerCase() == drops.toLocaleLowerCase()

						console.log(data.Drops[1]);

						// console.log(drops.toLocaleLowerCase());
						
						// return dropUpper
					})
					return dropFound
				}




        return location || drops
    }
}