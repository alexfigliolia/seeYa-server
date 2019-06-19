import Mongoose from 'mongoose';

const { ObjectId } = Mongoose.Schema.Types;

export default Mongoose.model('Conversations', new Mongoose.Schema({
  users: [{
    type: ObjectId,
    ref: 'Users',
    required: true,
  }],
  messages: [{
  	type: ObjectId,
    ref: 'Messages',
    required: true,
  }],
}));