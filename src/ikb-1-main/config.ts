import dotenv from 'dotenv';

dotenv.config();

const USER_NAME = process.env.MONGO_DB_USER_NAME || "test";
const PASSWORD = process.env.MONGO_DB_USER_PASSWORD || "qwerty123";
const MONGO_DB_URL = process.env.MONGO_DB_URL || "testdb.vn25fdl.mongodb.net";

export const MongoDBUris = `mongodb+srv://${USER_NAME}:${PASSWORD}@${MONGO_DB_URL}?retryWrites=true&w=majority`;
export const TelegramToken = process.env.TOKEN as string || "5401157042:AAH8M6Z4wU44eYSBR29T06Oxg_HHLx3fQx0"
export const PORT = process.env.PORT || 5000;
export const adminLogin = "@SuanAbzal"
