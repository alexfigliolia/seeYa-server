import Express from 'express';
import Conversation from './index';

const Router = Express.Router();

Router.delete('/:id', (req, res) => {
	Conversation.deleteOne({ _id: req.params.id })
		.then(() => {
			res.status(200).json({ success: true });
		})
		.catch(error => res.status(500).json({ error }));
})

export default Router;