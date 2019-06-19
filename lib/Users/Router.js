import Express from 'express';
import { Auth } from './Controller';

const Router = Express.Router();

Router.post('/', Auth);

export default Router;