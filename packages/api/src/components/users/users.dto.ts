import { Document } from 'mongoose'

export interface CreateUserDto extends Document{
    email: string;
    password: string;
}
