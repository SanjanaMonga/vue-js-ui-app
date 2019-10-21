<template>
  <div>
    <b-card id='sign-up-card' title='Login' class='mb-2'>
      <b-card-text>
        <b-form>
          <b-form-group id='input-group-1' label='Username' label-for='input-1'>
            <b-form-input
              id='input-1'
              v-model='userRegInfo.username'
              type='text'
              required
              placeholder='Enter username'
            ></b-form-input>
          </b-form-group>
          <b-form-group id='input-group-2' label='Email' label-for='input-2'>
            <b-form-input
              id='input-2'
              v-model='userRegInfo.email'
              type='email'
              required
              placeholder='Enter email'
            ></b-form-input>
          </b-form-group>

          <b-form-group id='input-group-3' label='Create Password' label-for='input-3'>
            <b-form-input
              type='password'
              id='input-3'
              v-model='userRegInfo.password'
              required
              placeholder='Enter password'
            ></b-form-input>
          </b-form-group>
          <b-form-group id='input-group-4' label='Confirm Password' label-for='input-4'>
            <b-form-input type='password' id='input-4' required placeholder='Enter password again'></b-form-input>
          </b-form-group>
        </b-form>
      </b-card-text>

      <b-button type='submit' variant='primary' v-on:click='signup()'>Sign Up</b-button>
    </b-card>
  </div>
</template>

<style lang='scss'>
#sign-up-card {
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
import { UserRegistrationInfo } from '../store/modules/datatypes';
@Component
export default class Signup extends Vue {
  public userRegInfo: UserRegistrationInfo = {
    email: '',
    password: '',
    username: '',
  };
  public show = true;

  public signup(evt: any) {
    users.signup(this.userRegInfo)
    .then(() => {
      router.push({name: 'articles'});
    }).catch(() => alert('Email or username is already registered.'));
  }
}
</script>