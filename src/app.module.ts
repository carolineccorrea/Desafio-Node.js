
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BackofficeModule } from './modules/backoffice/backoffice.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:xpto123@cluster0.snge5.mongodb.net/db_leadbase?retryWrites=true&w=majority'),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: '7180',
    //   password: '1q2w3e4r!@#$',
    //   database: '7180',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // }),
    BackofficeModule,
    //AgendaModule,
    // StoreModule,
  ],
})
export class AppModule { 
  // constructor(private readonly connection: Connection) {}
}