import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {JwtModule} from '@nestjs/jwt';
import { UsersController } from './users/users.controller';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UserEntity } from './users/models/user.entity';

@Module({
  imports: [
    JwtModule.register({ secret: 'secret' }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'base.sqlite',
      entities: [UserEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, AuthService, UsersService],
})
export class AppModule {
}
