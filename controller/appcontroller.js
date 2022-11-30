import db from "../database/db.js";

export function getAllUser(req, res) {
  res.status(200).send({ msg: "all user" });
}

export async function postUsers(req, res) {
  const { name, age } = req.body;

  const collection = await db.collection("test");
  collection.insertOne({ name: name, age: age });
  console.log("new user");
  res.status(200).send({ msg: "Geht " });
}

// SINGLE USERS

export function getSingleUser(req, res) {
  const { id } = req.params;

  if (id === datenbankidabfrage) {
    res.status(200).send({ msg: "user" });
  } else {
    res.status(404).send({ msg: "ERROR!! User not found" });
  }

  res.status(200).send({ msg: `Send ${id}` });
}

export function updateSingleUser(req, res) {}

export function deleteSingleUser(req, res) {}
