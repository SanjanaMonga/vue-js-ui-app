<template>
  <div id='article-list'>
    <h1>All Articles</h1>
    <SingleArticle v-for='article in feed' :article='article' :key='article.slug'></SingleArticle>
  </div>
</template>

<style lang='scss'>
#article-list {
    width: 70%;
}
</style>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import articles from '../store/modules/articles';
import { Article } from '@/store/modules/datatypes';
import SingleArticle from '../components/SingleArticle.vue';
@Component({
  components: { SingleArticle },
})
export default class Articles extends Vue {
  public feed: Article[] | null | undefined = [];
  public created() {
    articles.getGlobalArticles().then(() => {
      this.feed = articles.globalArticles;
    });
  }
}
</script>