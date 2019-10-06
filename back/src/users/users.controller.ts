import { Controller, Post, Body, Res, Next, Headers, Req, Request, HttpCode} from '@nestjs/common';
import { Login } from './models/login';
import { UsersService } from './users.service';
import { AuthService } from '../auth/auth.service';
import { IncomingMessage } from 'http';
import { Response } from 'express';


@Controller('users')
export class UsersController {
    constructor(private userService:UsersService, private authService:AuthService){

    }

    @Post()
    @HttpCode(200)
    async Login(@Body() credentials:Login, @Res() res:Response){
        
        let token = await this.authService.login(credentials);
        res.setHeader('Authentication', 'bearer ' + token);
        res.send()
        // return await 
    }
}
