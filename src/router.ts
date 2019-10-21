import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/articles',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: 'login' */ './views/Login.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import(/* webpackChunkName: 'signup' */ './views/Signup.vue'),
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import(/* webpackChunkName: 'articles' */ './views/Articles.vue'),
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import(/* webpackChunkName: 'article' */ './views/FullArticle.vue'),
    },
    {
    path: '/addArticle',
    name: 'addArticle',
    component: () => import(/* webpackChunkName: 'addArticle' */ './views/AddArticle.vue'),
  },
  ],
});
