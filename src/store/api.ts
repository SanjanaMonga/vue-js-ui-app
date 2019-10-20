import axios from 'axios';
import { AUTHORIZATION_HEARDER } from '@/string-constants';
import { UserAuthInfo, User, UserResponse, UserRegistrationInfo } from './modules/datatypes';

export const realWorldApi = axios.create({ baseURL: 'https://conduit.productionready.io/api' });

export function setJWT(token: string) {
    realWorldApi.defaults.headers.common[AUTHORIZATION_HEARDER] = `Token ${token}`;
}

export function clearJWT() {
    delete realWorldApi.defaults.headers.common[AUTHORIZATION_HEARDER];
}

export async function userLogin(loginDetails: UserAuthInfo): Promise<User> {
    return (await realWorldApi.post('/users/login', {user: loginDetails}) as UserResponse).user;
}

export async function userSignup(userDetails: UserRegistrationInfo): Promise<User> {
    return (await realWorldApi.post('/users', {user: userDetails}) as UserResponse).user;
}
