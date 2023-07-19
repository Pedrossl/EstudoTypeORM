import { Router, response } from 'express';
import { getRepository,getCustomRepository } from 'typeorm';
import { Class } from '../models/Class';
import { ClassRepository } from '../repositories/ClassRepository';

const classRouter = Router();

classRouter.post('/',async (request,response)=>{
    try{
    const repo = getRepository(Class);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
    }catch(err){
        console.log('err.message :>> ', "deu erro");
        
    }
})

classRouter.get('/',async (request,response)=>{
    response.json(await getRepository(Class).find());
})

classRouter.get('/:name',async (request,response)=>{
    const Repository = getCustomRepository(ClassRepository);
    const res = await Repository.findByName(request.params.name);
    response.json(res);
    })

    

export default classRouter;