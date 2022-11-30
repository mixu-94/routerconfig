import db from "../database/db.js";
import { ObjectId } from "mongodb";

export function getAllUser(req, res) {
  res.status(200).send({ msg: "all user" });
}

export async function postUsers(req, res) {
  const { name, age } = req.body;

  const collection = await db.collection("users");
  collection.insertOne({ name: name, age: age });
  console.log("new user");
  if (name === null || age === null) {
    res.status(200).send({ msg: "Informationen fehlen " });
  } else {
    res.status(200).send({ msg: "Geht " });
  }
}

// SINGLE USERS

export async function getSingleUser(req, res) {
  const { id } = req.params;
  const userscollection = await db.collection("users");

  //Test if nachträglich editieren

  //   res.status(404).send({ msg: "ERROR!! User not found" });
}

export async function updateSingleUser(req, res) {
  const { id } = req.params;
  const { name, age } = req.body;
  const userscollection = await db.collection("users");

  if (!req.body.age || !req.body.name) {
    res.status(400).json({ msg: "no informations" });
  } else {
    const updateResult = await userscollection.updateOne(
      { _id: ObjectId(id) },
      { $set: { name: name, age: age } }
    );
    console.log("Updated documents =>", updateResult);
    res.status(200).send({ msg: "updated" });
  }
}

export async function deleteSingleUser(req, res) {
  const { id } = req.params;

  // check if id is in database

  //delete
  const userscollection = await db.collection("users");
  const deleteResult = await userscollection.deleteOne({ _id: ObjectId(id) });
  console.log("Deleted documents =>", deleteResult);
  res.status(200).send({ msg: "Deleted" });
}
