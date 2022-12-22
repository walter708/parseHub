import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bodyParser from "body-parser";
import { pathRouter } from "./server/router/pathRouter.js";
import path from "path";

// Initialize the express app
const app = express();

// Parse Request Body
app.use(bodyParser.json());

// Configure CORS
app.use(cors());

// Define server port
const port = process.env.PORT || 3200;
if (process.env.NODE_ENV === "production") {
  app.use("/", pathRouter);
  app.use(express.static(path.join(path.dirname("."), "client", "build")));
  // app.use(express.static('client/build'));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(path.dirname("."), "client", "build", "index.html")
    );
  });
}

//Start listening to the request on the defined port
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
