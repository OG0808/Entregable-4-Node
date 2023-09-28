const Conversation = require("../models/Conversation");
const catchError = require("../utils/catchError");






const getAll = catchError( async(req, res)=>{
    const result = await Conversation.findAll()
    return res.json(result)
});

const create = catchError( async(req, res)=>{
    const {title, type, createBy} = req.body
    if (type !== 'pareja' && type !== 'grupal') {
        return res.status(404).json({
            error:"El tipo de conversacion debe ser en pareja o grupal"
        })
    }
    const result = await Conversation.create({title, type, createBy})
    return res.status(201).json(result)
});


const getOne = catchError( async(req, res)=>{
    const { id } = req.params
    const result = await Conversation.findByPk(id)
    if (!result) {
        return res.status(404)
    }
    return res.json(result)
});


const remove = catchError( async(req, res)=>{
    const { id } = req.params
    const result = await Conversation.destroy({where:{id}})
    if (!result) {
        return res.status(404)
    }
    return res.sendStatus(204)
});


const update = catchError( async(req, res)=>{
    const { id } = req.params
    const result = await Conversation.update(req.body, {where:{id}, returning:true})
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
