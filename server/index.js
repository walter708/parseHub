// In package.json we used nodemon index.ts
// and this possible because tsconfig.json file is on the same files
//  level as index.ts
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bodyParser from "body-parser";
import { pathRouter } from "./router/pathRouter.js";

// Initialize the express app
const app = express();

// Parse Request Body
app.use(bodyParser.json());

// Configure CORS
app.use(cors());

// Define server port
const port = process.env.PORT;

//Start listening to the request on the defined port
app.listen(port, () => {
  console.log(`listening on port ${port} `);
});

app.use("/", pathRouter);
