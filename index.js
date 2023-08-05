import express from "express";
import routes from "./src/routes/crmRoutes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// mongoose connection
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/CRMdb");
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
};

connectDB();

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

app.get("/", (req, res) => {
  res.send(`Server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
