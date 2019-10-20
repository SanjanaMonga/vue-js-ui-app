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