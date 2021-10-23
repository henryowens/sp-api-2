import { Document, model, Schema } from "mongoose";

export interface Info {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  imgUrl: string;
}

interface DInfo extends Document, Info {}

const info = new Schema<DInfo>(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
  },
  { collection: "info" }
);

export const InfoModel = model("info", info);
