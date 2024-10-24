import dotenv from 'dotenv'
import { MongoClient } from "mongodb";
dotenv.config()

const client = new MongoClient(process.env.MONGO_CONNECTION_URL)

let conn;
try {
  conn = await client.connect()
} catch (e) {
  console.log(e)
}

let db = conn.db('lmd')


////////////////////////////////////// GET //////////////////////////////////////
export async function getLandmarks() {
  // const collection = db.collection('users')
  // const results = collection.find({}).toArray()
  // return results
}

export async function getUser(userId) {
  // userId = parseInt(userId)
  // const collection = db.collection('users')
  // const results = collection.findOne({ userId })
  // return results
}

export async function getFavorites(userId) {
  // userId = parseInt(userId)
  // const collection = db.collection('accounts')
  // const results = await collection.find({ userId }).toArray()
  // return results
}

export async function getRoutes(accountId) {
  // accountId = parseInt(accountId)
  // const collection = db.collection('transactions')
  // const results = collection.find({ accountId }).toArray()
  // return results
}

////////////////////////////////////// POST //////////////////////////////////////
export async function postLandmark() {
  // const transaction = {
  //   accountId: parseInt(accountId),
  //   transactionId: uuidv4(),
  //   amount: Decimal128.fromString(amount),
  //   category,
  //   type,
  //   created: new Date(),
  // };
  // const collection = db.collection('transactions')
  // const results = collection.insertOne(transaction)
  // return results
}

export async function postFavorite() {
  // const transaction = {
  //   accountId: parseInt(accountId),
  //   transactionId: uuidv4(),
  //   amount: Decimal128.fromString(amount),
  //   category,
  //   type,
  //   created: new Date(),
  // };
  // const collection = db.collection('transactions')
  // const results = collection.insertOne(transaction)
  // return results
}

export async function postRoute() {
  // const transaction = {
  //   accountId: parseInt(accountId),
  //   transactionId: uuidv4(),
  //   amount: Decimal128.fromString(amount),
  //   category,
  //   type,
  //   created: new Date(),
  // };
  // const collection = db.collection('transactions')
  // const results = collection.insertOne(transaction)
  // return results
}

export async function findOrCreateUser(profile) {
  console.log(profile)
  // const collection = db.collection('user')
  // const results = collection.insertOne(transaction)
  // return results
}

////////////////////////////////////// UPDATE //////////////////////////////////////
export async function patchLandmark(transactionId, record) {
  // const transaction = {
  //   accountId: parseInt(record.accountId),
  //   amount: Decimal128.fromString(record.amount),
  //   category: record.category,
  //   type: record.type,
  //   created: new Date(),
  // };
  // const collection = db.collection('transactions')
  // const results = collection.updateOne({ transactionId }, { $set: transaction })
  // return results
}

////////////////////////////////////// DELETE //////////////////////////////////////
export async function deleteLandmark(transactionId) {
  // const collection = db.collection('transactions')
  // const results = collection.deleteOne({ transactionId })
  // return results
}

export async function deleteFavorite(transactionId) {
  // const collection = db.collection('transactions')
  // const results = collection.deleteOne({ transactionId })
  // return results
}

export async function deleteRoute(transactionId) {
  // const collection = db.collection('transactions')
  // const results = collection.deleteOne({ transactionId })
  // return results
}




