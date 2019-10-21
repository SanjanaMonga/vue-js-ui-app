<template>
  <div>
    <b-card id='login-card' title='Login' class='mb-2'>
      <b-card-text>
        <b-form>
          <b-form-group id='input-group-1' label='Email' label-for='input-1'>
            <b-form-input
              id='input-1'
              v-model='userAuthInfo.email'
              type='email'
              required
              placeholder='Enter email'
            ></b-form-input>
          </b-form-group>

          <b-form-group id='input-group-2' label='Password' label-for='input-2'>
            <b-form-input
              type='password'
              id='input-2'
              v-model='userAuthInfo.password'
              required
              placeholder='Enter password'
            ></b-form-input>
          </b-form-group>
        </b-form>
      </b-card-text>

      <b-button variant='primary' v-on:click='login()'>Submit</b-button>&nbsp;
      <b-button variant='secondary' v-on:click='signup()'>Sign Up</b-button>
    </b-card>
  </div>
</template>

<style lang='scss'>
#login-card {
  position: absolute;
  max-width: 30%;
  width: 30%;
  top: 25%;
  left: 35%;
}
</style>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import users from '@/store/modules/user';
import router from '@/router';
import { UserAuthInfo } from '../store/modules/datatypes';
@Component
export default class Login extends Vue {
  public userAuthInfo: UserAuthInfo = { email: '', password: '' };
  public login(evt: any) {
    users
      .login(this.userAuthInfo)
      .then(() => router.push({ name: 'articles' }))
      .catch( () => {
        alert('Invalid username or password.');
      });
  }
  public signup() {
    router.push({ name: 'signup' });
  }
}
</script>
