import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { IUser } from "../interfaces/user.interface";
import { User } from "../models/user.model";

@Injectable()
export class AccountService {
    constructor(
      //  @InjectModel('Customer') private readonly customerModel: Model<Customer>,
        @InjectModel('User') private readonly userModel: mongoose.Model<IUser>
    ) { }

    async create(data: User): Promise<IUser> {
        const user = new this.userModel(data);
        return await user.save();
    }

    async findByUsername(username): Promise<User> {
        return await this.userModel
            .findOne({ username: username })
            .exec();
    }

    async update(username: string, data: any): Promise<User> {
        return await this.userModel.findOneAndUpdate({ username }, data);
    }

    async findOneByUserName(username){
        return new User(username,"123456789",true)
    }
}
