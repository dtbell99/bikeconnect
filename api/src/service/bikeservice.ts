import { insertBike, queryBikeList, updateBike } from "../database/bike";
import { Bike } from "../model/bike";
import { v4 as uuidv4 } from "uuid";

export async function getBikeList(owner: string) {
  console.log("getBikeList");
  const bikeList = await queryBikeList(owner);
  if (!bikeList || !bikeList.rows) {
    return [];
  }
  return bikeList.rows;
}

export async function saveBike(bike: Bike, owner: string) {
  let result;
  let saved = false;
  if (!bike.id) {
    result = await insertBike(bike, owner);
    if (result && result.rows && result.rows.length === 1) {
      bike.id = result.rows[0].id;
      saved = true;
    }
  } else {
    result = await updateBike(bike, owner);
    if (result) saved = true;
  }
  return saved;
}
