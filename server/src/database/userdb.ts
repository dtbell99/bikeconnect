import type { User } from "#model/bikeconnect.ts";
import { getClient } from "./client.ts";
import { v4 as uuidv4 } from "uuid";

export async function getUser(email: string) {
  let client;
  try {
    client = getClient();
    client.connect();
    console.log("getUser");
    const result = await client.query(
      "select * from bikeconnect_user where email=$1",
      [email],
    );
    if (result && result.rows && result.rows.length === 1) {
      return result.rows[0];
    }
  } catch (err) {
    console.error(err);
  } finally {
    if (client) client.end();
  }
}

export async function createUser(user: User) {
  let client;
  try {
    client = getClient();
    client.connect();
    console.log("createUser");
    const authKey = uuidv4();
    const now = Date.now();
    const result = await client.query(
      "insert into bikeconnect_user (email, first_name, last_name, city, state, postal_code, created, updated, locked) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10",
      [
        user.email,
        user.firstName,
        user.lastName,
        user.city,
        user.state,
        user.postalCode,
        authKey,
        now,
        now,
        false,
      ],
    );
    console.log(result);
  } catch (err) {
    console.error(err);
  } finally {
    if (client) client.end();
  }
}
