import { getModule, Module, Mutation, Action, VuexModule, MutationAction } from 'vuex-module-decorators';
import store from '@/store';
import { listArticle } from '../api';
import { Article } from './datatypes';

@Module({ dynamic: true, store, name: 'articles', namespaced: true })
class ArticleModule extends VuexModule {
    // public article: Article = { body: '', description: '', tagList: [], title: '' };
    public articleCount: number = 0;
    public globalArticles: Article[] | null | undefined = [];

    // @MutationAction
    // public async addArticle(articleDetail: Article) {
    //     const article = await addArticle(articleDetail);
    //     return { article };
    // }
    @Mutation
    public setGlobalArticle(articles: Article[]) {
        this.globalArticles = articles;
    }
    @Action({ commit: 'setGlobalArticle' })
    public async getGlobalArticles() {
        const articleResponse = await listArticle();
        return articleResponse.articles;
    }
}
export default getModule(ArticleModule);
