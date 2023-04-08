import {City} from '../database/association.js';
export const addCity = (request,response,next)=>{
    City.create(request.body)
    .then(result=>{
        return response.status(200).json({Message:"City has been saved...",status:true});
    })
    .catch(err=>{
        console.log(err);
        return response.status(500).json({Message:"Internal Server error...",status:false});
    });
}