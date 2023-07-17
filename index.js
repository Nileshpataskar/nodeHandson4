const express=require("express");
const categoryRouter = require("./route/categoryRouter.");
const userRouter = require("./route/userRouter");

const app = express();



app.use(express.json())

app.use("/api",categoryRouter)
app.use("/api/user",userRouter)


app.listen(3600,()=>{console.log("Server started");
})