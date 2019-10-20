<template>
  <div id='app'>
   <RealWorldMainHeader></RealWorldMainHeader>
    <router-view></router-view>
    <RealWorldFooter></RealWorldFooter>
  </div>
</template>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import RealWorldMainHeader from '@/components/RealWorldMainHeader.vue';
import RealWorldFooter from '@/components/RealWorldFooter.vue';
@Component({
  components: {
    RealWorldFooter, RealWorldMainHeader,
  },
})
export default class App extends Vue {
}
</script>
