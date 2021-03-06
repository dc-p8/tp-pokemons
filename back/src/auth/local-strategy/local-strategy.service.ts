import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({passwordField:'password', usernameField:'pseudo'});
    console.log('ok');
  }

  async validate(pseudo: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(pseudo, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}