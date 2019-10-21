<template>
  <div>
    <b-card id="add-article-card" :title="title" class="mb-2">
      <b-card-text>
        <b-form>
          <b-form-group id="input-group-1" label="Title" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="article.title"
              type="text"
              required
              placeholder="Enter title"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Description" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="article.description"
              type="text"
              required
              placeholder="Enter description"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Article" label-for="input-3">
            <b-form-textarea id="input-3" v-model="article.body" required placeholder="Write here"></b-form-textarea>
          </b-form-group>
        </b-form>
      </b-card-text>

      <b-button type="submit" variant="primary" v-on:click="addArticle()">Add Article</b-button>
    </b-card>
  </div>
</template>

<style lang='scss'>
#add-article-card {
  position: absolute;
  max-width: 30%;
  width: 30%;
  top: 25%;
  left: 35%;
}
</style>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import router from '@/router';
import { Article } from '@/store/modules/datatypes';
import articles from '@/store/modules/articles';
import user from '@/store/modules/user';
@Component
export default class AddArticle extends Vue {
  public title: string = '';
  public article: Article = {
    slug: '',
    title: '',
    description: '',
    body: '',
    createdAt: Date.now.toString(),
    updatedAt: Date.now.toString(),
    favorited: false,
    favoritesCount: 0,
    author: user.profile,
  };
  public created() {
    if (this.$route.path.includes('add')) {
      this.title = 'Add New Article';
    } else {
      this.title = 'Update Article';
    }
  }
  public addArticle(evt: any) {
    articles.addArticle(this.article).then(() => router.push('/articles'));
  }
}
</script>