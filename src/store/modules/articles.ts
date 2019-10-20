import { getModule, Module, Mutation, Action, VuexModule, MutationAction } from 'vuex-module-decorators';
import store from '@/store';
import { addArticle, listArticle } from '../api';
import { Article, FullArticle } from './datatypes';

@Module({ dynamic: true, store, name: 'article', namespaced: true })
class ArticleModule extends VuexModule {
    public article: Article = { body: '', description: '', tagList: [], title: '' };
    public articleCount: number = 0;
    public globalArticles: FullArticle[] | null | undefined = [];

    @MutationAction
    public async addArticle(articleDetail: Article) {
        const article = await addArticle(articleDetail);
        return { article };
    }
    @Mutation
    public setGlobalArticle(articles: FullArticle[]) {
        this.globalArticles = articles;
    }
    @Action({ commit: 'setGlobalArticle' })
    public async getGlobalArticles() {
        const articleResponse = await listArticle();
        return articleResponse.articles;
    }
}
export default getModule(ArticleModule);
