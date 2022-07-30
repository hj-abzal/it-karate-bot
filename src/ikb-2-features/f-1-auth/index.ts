import express from 'express';
import {createUser} from './a-0-controllers/createUser';

const auth = express.Router();

auth.post("/createUser", createUser);

export default auth;
