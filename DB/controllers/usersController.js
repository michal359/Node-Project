const model = require('../model/usersModel');

async function create(name, username, email, street, city, phone, password){
    try{
        return model.createUser(name, username, email, street, city, phone, password);
    }catch(err){
        throw err;
    }
    
}



async function getAll(){
    try{
        return model.getUsers();
    }catch(err){
        throw err;
    }
}

async function getById(id){
    try{
        return model.getUser(id);
    }catch(err){
        throw err;
    }
}

async function deleteUser(id){
    try{
        return model.deleteUser(id);
    }catch(err){
        throw err;
    }
}


async function update(id, name, username, email, street, city, phone, password){
    try{
        return model.updateUser(id, name, username, email, street, city, phone, password);
    }catch(err){
        throw err;
    }
}
module.exports = {create, getAll, getById, deleteUser, update}