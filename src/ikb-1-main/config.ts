import dotenv from 'dotenv';

dotenv.config();

const USER_NAME = process.env.MONGO_DB_USER_NAME;
const PASSWORD = process.env.MONGO_DB_USER_PASSWORD;
const MONGO_DB_URL = process.env.MONGO_DB_URL;

export const MongoDBUris = `mongodb+srv://${USER_NAME}:${PASSWORD}@${MONGO_DB_URL}?retryWrites=true&w=majority`;
export const TelegramToken = process.env.TOKEN as string;
export const PORT = 7542;
export const adminLogin = "@SuanAbzal"
