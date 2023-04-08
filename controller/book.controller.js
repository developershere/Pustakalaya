import { validationResult } from 'express-validator';
import {Book} from '../database/association.js';
export const addBook = async (request,response,next)=>{
    let error = await validationResult(request.body);
    if(!error.isEmpty())
        return response.status(400).json({Error : "Bad request ",Message : error.array()});
    console.log(request.body);
    Book.create(request.body)
    .then(result=>{
        return response.status(200).json({Message : "Book has been saved ...",statu:true,result:result})
    })
    .catch(err=>{
        console.log(err);
        return response.status(500).json({Message : "Internal Server error...",status:false})
    })
}
export const removeBook = async (request,response,next)=>{
    try{
        let book = await Book.update({where : {id : request.params.id}},{status:false});
        console.log("Book Remove : "+book);
    }
    catch(err)
    {
        console.log(err);
        return response.status(500).json({Message : "Internal server error...",status : false});
    }
}