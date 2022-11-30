import { Router } from "express";
import {
  deleteSingleUser,
  getAllUser,
  getSingleUser,
  postUsers,
  updateSingleUser,
} from "../controller/appcontroller.js";

export const approute = Router();

approute.route("/user").get(getAllUser).post(postUsers);

approute
  .route("/user/:id")
  .get(getSingleUser)
  .put(updateSingleUser)
  .delete(deleteSingleUser);
