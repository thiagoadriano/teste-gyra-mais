const User = require('./User');
const {Schema, model} = require('mongoose');

const RoomSchema = Schema({
  name: {
    type: String,
    require: true
  },
  users: {
    type: [],
    default: []
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = model('Room', RoomSchema);
