import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {JwtModule} from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UserEntity } from './users/models/user.entity';
import { AuthController } from './auth/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './auth/local-strategy/local-strategy.service';
import { JwtStrategy } from './auth/jwt-strategy/jwt-strategy.service';
@Module({
  imports: [
    PassportModule,
    JwtModule.register({ secret:'secret', signOptions:{expiresIn:'60'}}),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'base.sqlite',
      entities: [UserEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, UsersService, LocalStrategy, JwtStrategy],
})
export class AppModule {
}
