export interface UserResponse {
    user: User;
}
export interface User {
    email: string;
    token: string;
    username: string;
    bio?: string;
    image?: null;
}

export interface ProfileResponse {
    profile: Profile;
}
export interface Profile {
    username: string;
    bio: string;
    image: string;
    following: boolean;
}

export interface UserAuthInfo {
    email: string;
    password: string;
}

export interface UserRegistrationInfo {
    email: string;
    password: string;
    username: string;
}

export interface ArticleResponse {
    article: Article;
}
export interface Article {
    title: string;
    description: string;
    body: string;
    tagList?: (string)[] | null;
}
export interface MultipleArticlesResponse {
    articles?: (FullArticle)[] | null;
    articlesCount: number;
}
export interface FullArticle {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList?: (string)[] | null;
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: Profile;
}