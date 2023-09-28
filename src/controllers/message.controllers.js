const Message = require("../models/Message");
const catchError = require("../utils/catchError");






const getAll = catchError( async(req, res)=>{
    const result = await Message.findAll()
    return res.json(result)
});

const create = catchError( async(req, res)=>{
    const result = await Message.create(req.body)
    return res.status(201).json(result)
});


const getOne = catchError( async(req, res)=>{
    const { id } = req.params
    const result = await Message.findByPk(id)
    if (!result) {
        return res.status(404)
    }
    return res.json(result)
});


const remove = catchError( async(req, res)=>{
    const { id } = req.params
    const result = await Message.destroy({where:{id}})
    if (!result) {
        return res.status(404)
    }
    return res.sendStatus(204)
});


const update = catchError( async(req, res)=>{
    const { id } = req.params
    const result = await Message.update(req.body, {where:{id}, returning:true})
    if (result[0] === 0) {
        return res.sendStatus(404)
    }
    return res.json(result[1][0])
});




module.exports = { 
getAll,
create,
getOne,
remove,
update,
}
