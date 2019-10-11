import { Injectable, NotFoundException, UnauthorizedException, Scope } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { Login } from '../users/models/login';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ) { }

    async validateUser(pseudo: string, pass: string): Promise<any> {
        const user = await this.userService.find(pseudo);
        if (user && user.passwordHash === pass) {
          return user;
        }
        return null;
    }

    public async login(user: Login){
        let payload =  {
            //sub:user.pseudo
        }

        return {
            access_token:this.jwtService.sign(payload, {
                expiresIn:60,
                subject:user.pseudo
            })
        };
    }
}
