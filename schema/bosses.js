import {z} from 'zod';

const postSchema = z.object({
  id: z.number(), 
  name:z.string(),
  information: z.string(),
  location: z.string(),
  drops: z.any(),
  image:z.string(),
  fight:z.string()
})


export function postValidation(object){
  return postSchema.safeParse(object)
}