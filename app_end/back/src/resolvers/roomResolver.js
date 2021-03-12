const Room = require('../models/Room');

// Query Actions
function rooms() {
    return Room.find({});
}

function room(_, { name }) {
    return Room.findOne({name});
}

// Mutation Actions
function createRoom(_, { room }) {
    const newRoom = new Room(room);
    return newRoom.save();
}

function deleteRoom(_, { id }) {
    return Room.findByIdAndRemove(id, {useFindAndModify: false});
}

module.exports = {
    Query: {rooms, room},
    Mutation: {createRoom, deleteRoom} 
}
