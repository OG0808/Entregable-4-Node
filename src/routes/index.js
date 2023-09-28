const express = require('express');
const routerUser = require('./user.router');
const routerConversation = require('./conversation.router');
const routerMessage = require('./message.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', routerUser)
router.use('/conversations', routerConversation)
router.use('/messages', routerMessage)


module.exports = router;




