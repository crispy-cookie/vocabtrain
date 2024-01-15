#! /usr/bin/env node
'use_strict';

import mongoose from 'mongoose';

const username = encodeURIComponent("user");
const password = encodeURIComponent(process.env.MONGODB_PW);

const clusterName = "urltracker.3vcne2x";
const databaseName = "databaseName";
const collectionName = "collectionName";

const mongoDB = `mongodb+srv://${username}:${password}@${clusterName}.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("Connected to MongoDB");

  // Define schema
  const Schema = mongoose.Schema;

  const SomeModelSchema = new Schema({
    a_number: { 
      type: Number,
      minLength: [1, "Zu kleine Zahl"],
      maxLength: [100, "Zu grosse Zahl"],
      required: [true, "Eine Zahl ist ein Pflichtwert"],
    },
    b_string: { type: String, required: true, maxLength: 100 },
    c_date: { type: Date, default: Date.now() },
  });

  // Compile model from schema
  const SomeModel = mongoose.model("collectionName", SomeModelSchema);

  // insert a document directly
  await SomeModel.create({ a_number: 2, b_string: "b_string" });

  // ... or create an instance and save it as a document
  const awesome_instance = new SomeModel({ a_number: 3, b_string: "b_string" });
  await awesome_instance.save();
}
