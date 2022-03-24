
import express from 'express';
import expressAsyncHandler from 'express-async-handler'; // Prevents the continuos loading
import data from '../data/data.js';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    //Below code to remove all the users
    // await User.remove({});   
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

export default userRouter;