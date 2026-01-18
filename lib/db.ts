import { connect } from "mongoose";

const mongodbUrl = process.env.MONGODB_URL;
if (!mongodbUrl) {
  throw new Error("Mongo db url not found");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDb = async () => {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    //using mongoose conenct, return promise affter connect
    cached.promise = connect(mongodbUrl).then((c) => c.connection);
  }
  try {
    cached.conn = await cached.promise;
  } catch (error) {
    console.log("error on cnnection ", error);
    throw error;
  }

  return cached.conn;
};

export default connectDb;
