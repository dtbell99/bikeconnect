import { getClient } from "./client";
import { Bike } from "../model/bike";

export async function insertBike(bike: Bike, owner: string) {
  let client;
  try {
    client = getClient();
    client.connect();
    console.log("insertBike");
    const result = await client.query(
      "insert into bike (brand, model, size, frame_material, owner, updated) values ($1, $2, $3, $4, $5, $6) RETURNING id",
      [bike.brand, bike.model, bike.size, bike.frameMaterial, owner, new Date()]
    );
    return result;
  } catch (err) {
    console.error(err);
  } finally {
    if (client) client.end();
  }
}

export async function updateBike(bike: Bike, owner: string) {
  let client;
  try {
    client = getClient();
    client.connect();
    console.log("insertBike");
    const result = await client.query(
      "update bike set brand=$1, model=$2, size=$3, frame_material=$4 where id=$5 and owner=$6",
      [bike.brand, bike.model, bike.size, bike.frameMaterial, bike.id, owner]
    );
    return result;
  } catch (err) {
    console.error(err);
  } finally {
    if (client) client.end();
  }
}

export async function queryBikeList(owner: string) {
  let client;
  try {
    client = getClient();
    client.connect();
    console.log("queryBikeList");
    const bikeList = await client.query("select * from bike where owner = $1", [
      owner,
    ]);
    return bikeList;
  } catch (err) {
    console.error(err);
  } finally {
    if (client) client.end();
  }
}
