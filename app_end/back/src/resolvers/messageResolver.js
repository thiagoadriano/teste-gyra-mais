const Message = require('../models/Message');

// Query Actions
function messages(_, {chatId, created}) {
    return Message.find({chat_id: chatId, created_at: {$eq: created}});
}

// Mutation Actions
function createMessage(_, { message }) {
    const newMessage = new Message(message);
    return newMessage.save();
}

module.exports = {
    Query: {messages},
    Mutation: {createMessage} 
}
