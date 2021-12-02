import { MongoClient } from "mongodb";
const mongoClient = new MongoClient(process.env.TEST_CONNECTION_STRING);
mongoClient.connect(() => mongoClient.close(() => console.log('done')));
