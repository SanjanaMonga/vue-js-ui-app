<template>
  <div id='full-article'>
    <h1>{{article.title}}</h1>
    <h6>{{article.description}}</h6>
    <span>{{article.updatedAt }}</span><br/>
    <img :src='article.author.image' width='15px' />&nbsp;<span>{{article.author.username}}</span>
    <div>
        <b-badge v-for='tag in article.tagList' :key='tag'>{{tag}}</b-badge>
    </div>
    <hr />
    <p>{{article.body}}</p>
  </div>
</template>
<style lang='scss'>
#full-article{
    width: 70%;
    margin: 5%;
}
</style>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import articles from '@/store/modules/articles';
import { Article } from '../store/modules/datatypes';
import router from '@/router';
@Component
export default class FullArticle extends Vue {
  public article: Article | undefined | null;
  public created() {
    this.article = articles.globalArticles
      ? articles.globalArticles.find((art) => art.slug === this.$route.params.id)
      : null;
  }
}
</script>