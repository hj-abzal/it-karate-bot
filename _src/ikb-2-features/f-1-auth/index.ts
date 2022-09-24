import express from 'express';
import {createUser} from './a-0-controllers/createUser';
import {getAllUsers} from './a-0-controllers/getAllUsers';
import {updateUser} from './a-0-controllers/updateUser';
import {deleteUser} from './a-0-controllers/deleteUser';

const auth = express.Router();

auth.get('/get-all', getAllUsers)
auth.post("/create-user", createUser);
auth.put("/update-user", updateUser);
auth.delete("/delete-user", deleteUser);

export default auth;
