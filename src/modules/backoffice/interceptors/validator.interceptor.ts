  
import { Injectable, NestInterceptor, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Contract } from 'src/modules/backoffice/contracts/contract';
import { ResultDto } from '../dto/result.dto';

@Injectable()
export class ValidatorInterceptor implements NestInterceptor {
    constructor(public contract: Contract) {

    }

    intercept(context: ExecutionContext, call$: Observable<any>): Observable<any> {
        const body = context.switchToHttp().getRequest().body;
        const valid = this.contract.validate(body);

        if (!valid) {
            throw new HttpException(new ResultDto('Ops, algo saiu errado', false, null, this.contract.errors), HttpStatus.BAD_REQUEST);
        }

        return call$;
    }
}