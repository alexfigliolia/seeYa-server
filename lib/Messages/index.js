import Mongoose from 'mongoose';

const { ObjectId } = Mongoose.Schema.Types;

export default Mongoose.model('Users', new Mongoose.Schema({
  from: {
    type: ObjectId,
    ref: 'users',
    required: true,
  },
  text: {
    type: String,
    required: true
  }
  conversation: {
  	type: ObjectId,
    ref: 'Conversations',
    required: true,
  }
}));