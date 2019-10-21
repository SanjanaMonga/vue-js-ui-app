import axios from 'axios';
import { AUTHORIZATION_HEARDER } from '@/string-constants';
import {
    UserAuthInfo, User, UserResponse, UserRegistrationInfo, Article, ArticleResponse,
    MultipleArticlesResponse,
} from './modules/datatypes';

export const realWorldApi = axios.create({ baseURL: 'https://conduit.productionready.io/api' });

export function setJWT(token: string) {
    realWorldApi.defaults.headers.common[AUTHORIZATION_HEARDER] = `Token ${token}`;
    alert(realWorldApi.defaults.headers.common[AUTHORIZATION_HEARDER]);
}

export function clearJWT() {
    delete realWorldApi.defaults.headers.common[AUTHORIZATION_HEARDER];
}

export async function userLogin(loginDetails: UserAuthInfo): Promise<User> {
    return ((await realWorldApi.post('/users/login', { user: loginDetails })).data as UserResponse).user;
}

export async function userSignup(userDetails: UserRegistrationInfo): Promise<User> {
    return ((await realWorldApi.post('/users', { user: userDetails })).data as UserResponse).user;
}

export async function addArticle(articleDetail: Article): Promise<Article> {
    return ((await realWorldApi.post('/articles', { article: { title: articleDetail.title,
        body: articleDetail.body, description: articleDetail.description } })).data as ArticleResponse).article;
}

export async function listArticle(): Promise<MultipleArticlesResponse> {
    return ((await realWorldApi.get('/articles')).data as MultipleArticlesResponse);
}
