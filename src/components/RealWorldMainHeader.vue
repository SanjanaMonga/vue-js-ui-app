<template>
  <div id="header">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Real World App - Something like Medium</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="userName!==null">
            <router-link to="/addArticle">Add New Article</router-link>
          </b-nav-item>
          <template v-if="userName!==null">
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>{{userName}}</em>
              </template>
              <b-dropdown-item>Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </template>
          <template v-else>
            <b-nav-item>
              <router-link to="login">Log In</router-link>
            </b-nav-item>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style lang="scss">
#header {
  a {
    color: white;
  }
}
</style>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import router from "@/router";
import user from "@/store/modules/user";
@Component
export default class RealWorldMainHeader extends Vue {
  get userName(): string | null {
    return user.username;
  }
}
</script>