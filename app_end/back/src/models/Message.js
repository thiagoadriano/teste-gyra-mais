const {Schema, model} = require('mongoose');

const MessageSchema = Schema({
  room_id: {
    type: Schema.Types.ObjectId,
    ref: 'Chat'
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'Chat'
  },
  text: {
    type: String,
    require: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = model('Message', MessageSchema);
