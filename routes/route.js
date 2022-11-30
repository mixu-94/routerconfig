import { Router } from "express";
import {
  deleteSingleUser,
  getAllUser,
  getSingleUser,
  postUsers,
  updateSingleUser,
} from "../controller/appcontroller.js";

import { checkUser } from "../middleware/check.js";

export const approute = Router();

approute.route("/user").get(getAllUser).post(postUsers);

approute
  .route("/user/:id")
  .get(checkUser, getSingleUser)
  .put(checkUser, updateSingleUser)
  .delete(checkUser, deleteSingleUser);
