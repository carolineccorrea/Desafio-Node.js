import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ICustomer } from "../interfaces/customer.interface";
import { Customer } from "../models/customer.model";

@Injectable()
export class CustomerService {
    constructor(@InjectModel('Customer') private readonly model: Model<ICustomer>) { }

    async create(data: Customer): Promise<Customer> {
        const customer = new this.model(data);
        return await customer.save();
    }
/*
    async update(document: string, data: UpdateCustomerDto): Promise<Customer> {
        return await this.model.findOneAndUpdate({ document }, data);
    }
*/
    async find(document): Promise<Customer> {
        return await this.model.findOne({ document }).exec();
    }

    async findAll(): Promise<Customer[]> {
        return await this.model.find({}, 'firstName lastName name email document').exec();
    }

}