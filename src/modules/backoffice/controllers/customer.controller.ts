import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseInterceptors,
} from '@nestjs/common';
import { CreateCustomerContract } from '../contracts/Customer.contracts';
import { CreateCustomerDTO } from '../dto/create-customer-dto';
import { ValidatorInterceptor } from '../interceptors/validator.interceptor';
import { Customer } from '../models/customer.model';
import { Result } from '../models/result.model';
import { User } from '../models/user.model';
import { AccountService } from '../services/account.service';

@Controller('v1/customers')
export class CustomerController {

    constructor(private readonly accountService: AccountService) {
    }


    @Get()
    async get() {
        return new Result(null, true, [], null);
    }
    @Get(':document')
    async getById(@Param('document') document: string) {
        return new Result(null, true, {}, null);
    }
    @Post()
    //@UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract()))
    async post(@Body() model: CreateCustomerDTO) {
        const nuser = new User(model.document, model.password, true)
        const user = await this.accountService.create(nuser);
        return new Result('Cliente criado com sucesso', true, user, null);
    }

    @Put(':document')
    async put(@Param('document') document, @Body() body) {
        return new Result('Cliente atualizado com sucesso', true, body, null)
    }

    @Delete(':document')
    async delete(@Param('document') document) {
        return new Result('Cliente deletado com sucesso', true, null, null);
    }
}
