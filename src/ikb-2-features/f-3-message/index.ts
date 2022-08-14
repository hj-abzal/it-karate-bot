import express from 'express';
import {sendToOne} from './m-0-controllers/sendToOne';
import {sendToAll} from './m-0-controllers/sendToAll';

const send = express.Router();

send.post("/to-one", sendToOne);
send.post("/to-all", sendToAll);

export default send;
