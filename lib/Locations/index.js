import Mongoose from 'mongoose';

export default Mongoose.model('Locations', new Mongoose.Schema({
  latitude: {
  	type: Number,
  	required: true,
  	default: null
  },
  longitude: {
  	type: Number,
  	required: true,
  	default: null
  },
  userId: {
  	type: Mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  }
}, { timestamps: true }));