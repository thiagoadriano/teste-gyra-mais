const { $where } = require('../models/User');
const User = require('../models/User');

// Query Actions
function users() {
    return User.find({});
}

function user(_, { nickname }) {
    return User.findOne({nickname});
}

function usersSearch(_, { search }) {
  return User.find({nickname: {$regex: new RegExp(search, 'g')}});
}

// Mutation Actions
function createUser(_, { user }) {
    const exists = User.exists({nickname: user.nickname});
    if (exists) {
      return Promise.resolve('Usuário já existe');
    }
    const newUser = new User(user);
    return newUser.save();
}

function deleteUser(_, { id }) {
    return User.findByIdAndRemove(id, {useFindAndModify: false});
}

module.exports = {
    Query: {users, user, usersSearch},
    Mutation: {createUser, deleteUser} 
}
