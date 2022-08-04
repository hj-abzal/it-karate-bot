import dotenv from 'dotenv';

dotenv.config();

const USER_NAME = process.env.MONGO_DB_USER_NAME || "suan";
const PASSWORD = process.env.MONGO_DB_USER_PASSWORD || "7777";
const MONGO_DB_URL = process.env.MONGO_DB_URL || "MONGO_DB_URL=cluster0.olxw6.mongodb.net/";

export const MongoDBUris = `mongodb+srv://${USER_NAME}:${PASSWORD}@${MONGO_DB_URL}?retryWrites=true&w=majority`;
export const TelegramToken = process.env.TOKEN as string || "5530425128:AAFBK5i5Xmo_667o3GE5J5gFCgIaOvWjseo"
export const PORT = process.env.PORT || 7542;
export const adminLogin = "@SuanAbzal"
