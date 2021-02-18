import { Injectable } from "@nestjs/common";
import { Validator } from "../../../utils/validator";
import { CreateCustomerDTO } from "../dto/create-customer-dto";
import { Contract } from "./Contract";

@Injectable()
export class CreateCustomerContract implements Contract {
    errors: any[];
    
    validate(model: CreateCustomerDTO): boolean {
        const validator = new Validator();

        validator.hasMinLen(model.name, 5, 'Nome invalido');
        validator.isEmail(model.email, 'Email invalido');

        this.errors = validator.errors;

        return validator.isValid();
    }

}