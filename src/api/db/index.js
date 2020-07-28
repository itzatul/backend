import mongoose from 'mongoose';
import { User } from './models/users';
const uri = 'mongodb://localhost:27017/diddb';
const connectDb = () => mongoose.connect(uri, { useUnifiedTopology: true });
const models = User;
 
export { connectDb };

export default models;