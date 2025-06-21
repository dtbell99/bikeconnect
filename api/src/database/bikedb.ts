import { getClient } from "./client";
import { Bike } from "../model/bike";

export async function insertBike(bike: Bike, owner: string) {
  let client;
  try {
    client = getClient();
    client.connect();
    console.log("insertBike");
    const result = await client.query(
      "insert into bike (brand, model, frame_size, frame_material, color, owner, updated) values ($1, $2, $3, $4, $5, $6, $7) RETURNING id",
      [
        bike.brand,
        bike.model,
        bike.frameSize,
        bike.frameMaterial,
        bike.color,
        owner,
        new Date(),
      ]
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
      "update bike set brand=$1, model=$2, frame_size=$3, frame_material=$4, color=$5 where id=$6 and owner=$7",
      [
        bike.brand,
        bike.model,
        bike.frameSize,
        bike.frameMaterial,
        bike.color,
        bike.id,
        owner,
      ]
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
    const bikeList = await client.query(
      "select * from bike where owner = $1 order by brand asc, model asc",
      [owner]
    );
    return bikeList;
  } catch (err) {
    console.error(err);
  } finally {
    if (client) client.end();
  }
}

export async function queryBike(id: number, owner: string) {
  let client;
  try {
    client = getClient();
    client.connect();
    console.log("queryBikeList");
    const resp = await client.query(
      "select * from bike where owner = $1 and id=$2",
      [owner, id]
    );
    return resp;
  } catch (err) {
    console.error(err);
  } finally {
    if (client) client.end();
  }
}
