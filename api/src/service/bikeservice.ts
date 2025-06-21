import {
  insertBike,
  queryBike,
  queryBikeList,
  updateBike,
} from "../database/bikedb";
import { Bike } from "../model/bike";

type DBBike = {
  id: number;
  brand: string;
  model: string;
  frame_size?: string;
  frame_material: string;
  color: string;
};

function convertBikeFromDBBike(itm: DBBike) {
  const bike: Bike = {
    id: itm.id,
    brand: itm.brand,
    model: itm.model,
    frameMaterial: itm.frame_material,
  };
  if (itm.frame_size) bike.frameSize = itm.frame_size;
  if (itm.color) bike.color = itm.color;
  return bike;
}

export async function getBikeList(owner: string) {
  console.log("getBikeList");
  const bikeList: Bike[] = [];
  const resp = await queryBikeList(owner);
  if (resp.rows) {
    for (const itm of resp.rows) {
      bikeList.push(convertBikeFromDBBike(itm));
    }
  }
  return bikeList;
}

export async function getBike(id: number, owner: string) {
  console.log("getBike::" + id);
  const resp = await queryBike(id, owner);
  if (resp && resp.rows && resp.rows.length === 1) {
    const bike = convertBikeFromDBBike(resp.rows[0]);
    return bike;
  }
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
