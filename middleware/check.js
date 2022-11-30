import { body } from "express-validator";
import db from "../database/db.js";
import { ObjectId } from "mongodb";

export const checkUser = async (req, res, next) => {
  const { id } = req.params;
  const userscollection = await db.collection("users");
  try {
    const user = await userscollection.find({ _id: ObjectId(id) }).toArray();
    if (user[0]._id) {
      next();
    }
  } catch {
    res.status(404).send({ msg: "user not found" });
  }
};
