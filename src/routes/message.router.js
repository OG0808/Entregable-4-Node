const { getAll, create, getOne, remove, update } = require("../controllers/message.controllers");
const express = require('express')




const routerMessage = express.Router()


routerMessage.route('/')
.get(getAll)
.post(create)

routerMessage.route('/:id')
.get(getOne)
.delete(remove)
.put(update)

module.exports = routerMessage;