const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config();

let mongoClient;
let coll;

async function connectToMongoClient(name = '') {
  if (!mongoClient) {
    mongoClient = await MongoClient.connect(process.env.URI);
    coll = mongoClient.db("test").collection(`${name}`);
  }
  return coll;
}

async function connectToMongoose() {
  try {
    await mongoose.connect(process.env.URI);
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Error al conectar a MongoDB con Mongoose', error);
    process.exit(1);
  }
}

module.exports = {
  connectToMongoClient,
  connectToMongoose,
};
