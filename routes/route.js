import { Router } from "express";
import { getAllUser, getSingleUser } from "../controller/appcontroller.js";

export const approute = Router();

approute.route("/user").get(getAllUser).post();

approute.route("/user/:id").get(getSingleUser);
