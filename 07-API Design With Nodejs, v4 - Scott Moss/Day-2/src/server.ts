import express from 'express'
import router from "./router";
import morgan from "morgan"
import cors from "cors"
import { protect } from './modules/auth';
import { createNewUser, signin } from './handlers/users';

const app = express();

app.use(cors())
// Global middleware with morgan
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extends: true }))


app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: 'Hello' })
})

// PROTECT 
app.use("/api", protect, router)

app.post('/user', createNewUser)
app.post("/signin", signin)

export default app; 