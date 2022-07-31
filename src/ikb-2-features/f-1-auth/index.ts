import express from 'express';
import {createUser} from './a-0-controllers/createUser';
import {getAllUsers} from './a-0-controllers/getAllUsers';
import {updateUser} from './a-0-controllers/updateUser';
import {deleteUser} from './a-0-controllers/deleteUser';

const auth = express.Router();

auth.get('/users', getAllUsers)
auth.post("/users", createUser);
auth.put("/users", updateUser);
auth.delete("/users", deleteUser);

export default auth;
