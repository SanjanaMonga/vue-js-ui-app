<template>
  <div id='footer'>
    <span>NAGP 2019 Assignment</span>
  </div>
</template>
<style lang=scss>
#footer {
  position: fixed;
  bottom: 0;
  background: #09454f;
  height: 5vh;
  display: block;
  width: 100%;
  color: white;
  span {
    position: relative;
    top: 20%;
  }
}
</style>
<script lang=ts>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RealWorldFooter extends Vue {}
</script>