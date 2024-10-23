import pg from "pg";
import dotEnv from "dotenv";
dotEnv.config();

const { Pool } = pg;

export const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});


export async function findOrCreateUser(profile) {

  const { sub, refreshToken, given_name, family_name, picture } = profile._json;

  // set new refresh token on user if it exists
  let { rows } = await pool.query(
    "UPDATE google_profile SET refresh_token = $1 WHERE id = $2 RETURNING *",
    [refreshToken, sub]
  );
  let user = rows[0];

  // if user doesn't exist
  if (!user) {
    let { rows } = await pool.query(
      "INSERT INTO google_profile(id, refresh_token, first_name, last_name, picture) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [sub, refreshToken, given_name, family_name, picture]
    );
    user = rows[0]
  }

  return user;
}