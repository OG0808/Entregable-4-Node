const { getAll, create, getOne, remove, update } = require("../controllers/conversation.controllers");
const express = require('express')




const routerConversation = express.Router()


routerConversation.route('/')
.get(getAll)
.post(create)

routerConversation.route('/:id')
.get(getOne)
.delete(remove)
.put(update)

module.exports = routerConversation;