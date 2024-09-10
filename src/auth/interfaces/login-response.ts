/* eslint-disable prettier/prettier */

import { User } from "../entities/user.entity";

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface LoginResponse {

    user: User;
    token: string;
    
}