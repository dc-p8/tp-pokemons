import { Controller, UseGuards, Post, Request, Get, Req} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async Login(@Req() request){
        return await this.authService.login(request.user);
    }
}
