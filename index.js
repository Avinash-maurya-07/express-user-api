const express=require("express");
const mongoose=require("mongoose");
const userRouter=require("./routes/user");
const {connectMongoDb}=require("./connection");

const app = express();
const PORT = 3000;
connectMongoDb("mongodb://localhost:27017/usersDB").then(()=>console.log("MongoDb Connected!"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users",userRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
