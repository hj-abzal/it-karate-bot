import express from 'express';
import {sendMessageBulk} from './m-0-controllers/sendMessageBulk';
import {sendToAll} from './m-0-controllers/sendToAll';
import {createScheduler} from './m-0-controllers/createScheduler';
import {getScheduler} from './m-0-controllers/getScheduler';
import {deleteScheduler} from './m-0-controllers/deleteScheduler';
import {updateScheduler} from './m-0-controllers/updateScheduler';

const send = express.Router();

send.post("/message", sendMessageBulk);
send.post("/to-all", sendToAll);

send.get("/get-scheduled-message", getScheduler);
send.post("/create-scheduled-message", createScheduler);
send.delete("/delete-scheduled-message", deleteScheduler)
send.put("/update-scheduled-message", updateScheduler)
export default send;
