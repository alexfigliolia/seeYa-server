import Express from 'express';
import Mongoose from 'mongoose';
import Cors from 'cors';
import UserRoutes from './Users/Router';
import LocationRoutes from './Locations/Router';
import ConversationRoutes from './Conversations/Router';

const App = Express();

App.use(Express.json());
App.use(Cors());
App.use('/api/users', UserRoutes);
App.use('/api/locations', LocationRoutes);
App.use('/api/conversations', ConversationRoutes);

Mongoose.connect('mongodb://localhost/seeYa', { useNewUrlParser: true })
	.then(() => console.log('Successfully connected to MongoDB'))
	.catch(err => console.log('Error connecting to MongoDB'));

App.listen(5000, () => console.log('App running on port 5000'));