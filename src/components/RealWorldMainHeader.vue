<template>
  <div id=header>
    <b-navbar toggleable=lg type=dark variant=info>
      <b-navbar-brand href=#>Real World App - Something like Medium</b-navbar-brand>
      <b-collapse id=nav-collapse is-nav>
        <b-navbar-nav class=ml-auto>
          <template v-if=userName!=null>
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>{{userName}}</em>
              </template>
              <b-dropdown-item href=#>Profile</b-dropdown-item>
              <b-dropdown-item v-on:click=signOut>Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </template>
          <template v-else>
            <router-link to=/login>
              <b-nav-item>Log In</b-nav-item>
            </router-link>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import router from '@/router';
import user from '@/store/modules/user';
@Component
export default class RealWorldMainHeader extends Vue {
  public userName: string | null = user.username;
}
</script>