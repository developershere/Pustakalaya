import {State} from '../database/association.js';
export const add = (request,response,next)=>{
    console.log(request.body);
    const states = request.body;
    for(let stateName of states){
    State.create({name:stateName})
    .then(result=>{
        return response.status(200).json({Message : "States has been saved...",status : true});
    })
    .catch(err=>{
        console.log(err);
        return response.status(500).json({Message:"Internal Server error...",status : false})
    })
}
}