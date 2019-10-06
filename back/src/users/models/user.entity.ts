import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('users') // nom de la table
export class UserEntity {
    @PrimaryColumn()
    pseudo: string;

    @Column({name:'password_hash'})
    passwordHash: string;

    @Column()
    salt: string;
}