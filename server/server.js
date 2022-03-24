import express from "express";
import mongoose from 'mongoose'
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";

const port = process.env.PORT || 8080;

const mongoUrl = process.env.MONGODB_URL || "mongodb://localhost/buildmore"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const app = express();


// Models and data from Routes

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
