import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { ICustomer } from "../interfaces/customer.interface";
import { IUser } from "../interfaces/user.interface";
import { Customer } from "../models/customer.model";
import { User } from "../models/user.model";

@Injectable()
export class AccountService {
    constructor(
        @InjectModel('Customer') private readonly customerModel: mongoose.Model<ICustomer>,
        @InjectModel('User') private readonly userModel: mongoose.Model<IUser>
    ) { }

    async create(data: User): Promise<IUser> {
        const user = new this.userModel(data);
        return await user.save();
    }
    /*
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
        */
       async authenticate(username, password): Promise<ICustomer> {
        var customer = await this.customerModel
            .findOne({ document: username })
            .populate('user')
            .exec();
        return customer;    
    }
}
