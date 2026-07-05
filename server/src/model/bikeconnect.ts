export type Bike = {
  id: number;
  brand: string;
  model: string;
  frameSize?: string;
  frameMaterial: string;
  color?: string;
};

export type User = {
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  postalCode: string;
  locked?: boolean;
  created?: Date;
  updated?: Date;
};

export type ItemStatus = "active" | "pending" | "sold";

export type Item = {
  id: number;
  description: string;
  email: string;
  created: Date;
  updated: Date;
  pickup: boolean;
  ship: boolean;
  zip: number;
  city: string;
  state: string;
  status: ItemStatus;
};

const 