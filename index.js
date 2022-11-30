import express from "express";
import { approute } from "./routes/route.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/", approute);

app.listen(PORT, () => console.log("Server Launched"));
