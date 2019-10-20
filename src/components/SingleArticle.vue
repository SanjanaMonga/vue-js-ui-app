<template>
  <div id="article">
      <b-card v-bind:title="article.title">
        <b-card-text>{{article.description}}</b-card-text>
      </b-card>
  </div>
</template>
<style lang=scss>
#article {
  margin: 1vh;
  b-card-text {
    text-align: left;
  }
}
</style>
<script lang=ts>
import { Component, Prop, Vue } from "vue-property-decorator";
import article from "@/store/modules/articles";
import { FullArticle } from '@/store/modules/datatypes';
@Component
export default class SingleArticle extends Vue {
  @Prop() public article?: FullArticle;
}
</script>