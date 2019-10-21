<template>
  <div id='article' v-on:click='openArticle()'>
      <b-card v-bind:title='article.title'>
        <b-card-text><p>{{article.description}}</p>
        <b-badge><font-awesome-icon :icon="['fas', 'heart']" v-if='article.favorited' />
        <font-awesome-icon :icon="['far', 'heart']" v-if='!article.favorited' />{{article.favoritesCount}}
        </b-badge>
        <br/>
        </b-card-text>
      </b-card>
  </div>
</template>
<style lang='scss'>
#article {
  margin: 1vh;
}
</style>
<script lang=ts>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Article } from '@/store/modules/datatypes';
import router from '@/router';
@Component
export default class SingleArticle extends Vue {
  @Prop() public article?: Article;
  public openArticle() {
    router.push({name: 'article', params: {id: this.article ? this.article.slug : ''} });
  }
}
</script>