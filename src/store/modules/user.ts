import { getModule, Module, Mutation, Action, VuexModule, MutationAction } from 'vuex-module-decorators';
import store from '@/store';
import { userLogin, userSignup, setJWT } from '../api';
import { UserAuthInfo, User, Profile, UserRegistrationInfo } from './datatypes';

@Module({ dynamic: true, store, name: 'user', namespaced: true })
class UserModule extends VuexModule {
  public user: User = { bio: '', email: '', image: null, token: '', username: '' };
  public profile: Profile = { username: '', image: '', bio: '', following: false };

  public get username() {
    return this.user ? this.user.username : null;
  }

  @MutationAction
  public async login(credentials: UserAuthInfo) {
    const user = await userLogin(credentials);
    setJWT(user.token);
    return {user};
  }

  @MutationAction
  public async signup(credentials: UserRegistrationInfo) {
    const user = await userSignup(credentials);
    return {user};
  }
}

export default getModule(UserModule);
