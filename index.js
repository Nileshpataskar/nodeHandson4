const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const categoryRouter = require("./route/categoryRouter.");
const userRouter = require("./route/userRouter");

const app = express();

//cors
const cors = require("cors");
app.use(cors({ origin: "*" }));

app.use(express.json());

app.use("/api", categoryRouter);
app.use("/api/user", userRouter);

app.listen(3600, () => {
  console.log("Server started");
});
