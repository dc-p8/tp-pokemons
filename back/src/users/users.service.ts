import { Injectable } from '@nestjs/common';
import { UserEntity } from './models/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ){}
    async find(pseudo:string){
        let user = await this.userRepository.findOne({
            where:[
                {
                    pseudo:pseudo
                }
            ],
        });
        return user;
    }
    async  create(user: UserEntity): Promise<UserEntity> {
        return await this.userRepository.save(user);
    }
    
}
