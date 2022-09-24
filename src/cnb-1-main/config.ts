const USER_NAME = process.env.MONGO_DB_USER_NAME || "test";
const PASSWORD = process.env.MONGO_DB_USER_PASSWORD || "7777";
const MONGO_DB_URL = process.env.MONGO_DB_URL || "testclucter.wc2wnxq.mongodb.net/"; // bd for tests

export const MongoDBUris = `mongodb+srv://${USER_NAME}:${PASSWORD}@${MONGO_DB_URL}?retryWrites=true&w=majority`;

export const VERSION_1_0 = "/1.0";

export const PORT = 7542;