const Conversation = require("./Conversation");
const Message = require("./Message");
const User = require("./User");

User.hasMany(Conversation)// userid
Conversation.belongsTo(User)

User.hasMany(Message)// userid
Message.belongsTo(User)

Conversation.hasMany(Message)// convesationId
Message.belongsTo(Conversation)

Conversation.belongsToMany(User, { through: 'Participants' })//conversationId
User.belongsToMany(Conversation, { through: 'Participants' })