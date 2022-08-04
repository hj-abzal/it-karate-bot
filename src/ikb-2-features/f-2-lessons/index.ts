import express from 'express';
import {createLesson} from './l-0-controllers/createLesson';
import {getAllLessons} from './l-0-controllers/getAllLessons';
import {getOneLesson} from './l-0-controllers/getOneLesson';
import {updateLesson} from './l-0-controllers/updateLesson';
import {deleteLesson} from './l-0-controllers/deleteLesson';

const lessons = express.Router();

lessons.get('/get-all', getAllLessons)
lessons.get('/get-one', getOneLesson)
lessons.post("/create", createLesson);
lessons.put("/update", updateLesson);
lessons.delete("/delete", deleteLesson);

export default lessons;
