import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { Login } from '../users/models/login';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ) { }

    public async login(user: Login): Promise< any | { status: number }>{
        let userData = await this.userService.find(user.pseudo);
        if(!userData){
            throw new NotFoundException('')
        }
        if(userData.passwordHash != user.password){
            throw new UnauthorizedException();
        }
        let payload =  {
        }
        const token = this.jwtService.sign(payload, {
            expiresIn:60,
            subject:userData.pseudo
        });

        return token;
    }

    // public async register(user: User): Promise<any>{
    //     return this.userService.create(user)
    // } 

}
