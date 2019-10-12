<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Real World App - Something like Medium</b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <template v-if="isSignedIn">
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item v-on:click="signOut">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </template>
            <template v-else>
              <b-nav-item href="/login">Log In</b-nav-item>
            </template>
            <!-- </template> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  isSignedIn: boolean = true;
  constructor() {
    super();
    localStorage.isSignedIn = true;
    this.isSignedIn =
      localStorage.getItem("isSignedIn") !== null
        ? localStorage.getItem("isSignedIn") == "true"
          ? true
          : false
        : false;
  }

  signOut() {
    localStorage.isSignedIn = false;
    this.isSignedIn = false;
  }
}
</script>
