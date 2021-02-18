import { User } from "../models/user.model";
import { Document } from 'mongoose';

export interface ICustomer extends Document {
         name: string;
         document: string;
         email: string;
         user: User;

}
