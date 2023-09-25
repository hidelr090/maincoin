import mongoose from 'mongoose';

const dbURL = process.env.MONGO_CONNECTION_STRING;

if (!dbURL) {
  throw new Error('A variável de ambiente MONGO_CONNECTION_STRING não está definida.');
}

mongoose.connect(dbURL);

export const db = mongoose.connection;
