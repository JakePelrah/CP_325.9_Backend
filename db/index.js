

//   const { sub, refreshToken, given_name, family_name, picture } = profile._json;

//   // set new refresh token on user if it exists
//   let { rows } = await pool.query(
//     "UPDATE google_profile SET refresh_token = $1 WHERE id = $2 RETURNING *",
//     [refreshToken, sub]
//   );
//   let user = rows[0];

//   // if user doesn't exist
//   if (!user) {
//     let { rows } = await pool.query(
//       "INSERT INTO google_profile(id, refresh_token, first_name, last_name, picture) VALUES($1, $2, $3, $4, $5) RETURNING *",
//       [sub, refreshToken, given_name, family_name, picture]
//     );
//     user = rows[0]
//   }

//   return user;
// }


import dotenv from 'dotenv'
import { Decimal128, MongoClient } from "mongodb";
// import { v4 as uuidv4 } from 'uuid'
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
export async function postLandmark({ accountId, category, type, amount }) {
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

export async function postFavorite({ accountId, category, type, amount }) {
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

export async function postRoute({ accountId, category, type, amount }) {
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




