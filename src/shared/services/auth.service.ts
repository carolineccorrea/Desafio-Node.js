import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/modules/backoffice/services/account.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { User } from 'src/modules/backoffice/models/user.model';

@Injectable()
export class AuthService {
    constructor(
        private readonly accountService: AccountService,
        private readonly jwtService: JwtService,
    ) { }

    async createToken() {
        const user: JwtPayload = {username: 'test@email.com'};
        return this.jwtService.sign(user);
    }

    async validateUser(payload: JwtPayload): Promise<any> {
         return await this.accountService.findOneByUserName(payload.username);
       // return payload;
    }
}