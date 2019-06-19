import User from './index';

const createUser = ({ fbId, email }, res) => {
	const newUser = new User({ fbId, email });
	newUser.save()
		.then(doc => {
			res.status(200).json({ user: doc, new: true });
		})
		.catch(error => res.status(500).json({ error }));
}

export const Auth = (req, res) => {
	const { fbId, email } = req.body;
	User.find({ email })
		.then(docs => {
			if(docs.length === 0) {
				createUser(req.body, res);
			} else {
				res.status(200).json({ user: docs[0], new: false });
			}
		})
		.catch(error => res.status(500).json({ error }));
}