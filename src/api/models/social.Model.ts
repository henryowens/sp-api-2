import { LeanDocument, model, Schema, SchemaDefinition } from 'mongoose';

const socialDocument: SchemaDefinition<LeanDocument<undefined>> = {
  url: {
    type: String,
  },
  username: {
    type: String,
  },
};

const social = new Schema(
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
  { collection: 'social' }
);

export const SocialModel = model('social', social);
