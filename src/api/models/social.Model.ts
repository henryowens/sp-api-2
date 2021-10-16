import {
  Document,
  LeanDocument,
  model,
  Schema,
  SchemaDefinition,
} from "mongoose";

const socialDocument: SchemaDefinition<LeanDocument<undefined>> = {
  url: {
    type: String,
  },
  username: {
    type: String,
  },
  id: {
    type: Number,
    unique: true
  }
};

interface SocialItem {
  url: string;
  username: string;
  id: number;
}

export interface Social extends Document {
  username: string;
  whatsapp: SocialItem;
  facebook: SocialItem;
}

const social = new Schema<Social>(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    whatsapp: {
      type: socialDocument,
      unique: true,
    },
    facebook: {
      type: socialDocument,
      unique: true,
    },
  },
  { collection: "social" }
);

export const SocialModel = model("social", social);
