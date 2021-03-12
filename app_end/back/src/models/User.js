const {Schema, model} = require('mongoose');

const UserSchema = Schema({
  nickname: {
    type: String,
    require: true
  },
  active: {
    type: Boolean,
    default: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = model('User', UserSchema);
