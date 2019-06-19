import Mongoose from 'mongoose';

const { ObjectId } = Mongoose.Schema.Types;

export default Mongoose.model('Users', new Mongoose.Schema({
  email: {
  	type: String,
  	required: true
  },
  fbId: {
  	type: String,
  	required: true
  },
  location: {
    type: ObjectId,
    ref: 'Location',
    required: true,
    default: null,
  },
  conversations: [{
  	type: ObjectId,
    ref: 'Conversations',
    required: true,
    default: null,
  }]
}));