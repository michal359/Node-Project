const model = require('../model/loginModel');

// async function getByUsername( username, password){
//     try{
//         return model.getByUsername(username, password);
//     }catch(err){
//         throw err;
//     }
    
// }

async function getByQuery(query){
    try{
        return model.getByQuery(query);
    }catch(err){
        throw err;
    }
}
async function getById(id){
    try{
        return model.getUsername(id);
    }catch(err){
        throw err;
    }
}


module.exports = { getById, getByQuery};