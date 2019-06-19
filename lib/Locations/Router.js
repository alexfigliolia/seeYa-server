import Express from 'express';
import Location from './index';

const Router = Express.Router();

Router.post('/:id', async (req, res) => {
	const { id } = req.params;
	const { latitude, longitude } = req.body;
	Location.findOneAndUpdate(
		{ userId: id }, 
		{ latitude, longitude },
		{ new: true },
		(err, update) => {
			//This can probably exist as
			//a silent operation
			return;
		});
});

export default Router;