import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/login';
import HomePage from '@/components/HomePage';
import Article from '@/components/common/ShowArticle';
import Category from '@/components/common/ShowCategory';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Test',
      component: Test
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/ShowArticle',
      name: 'Article',
      component: Article
    },
    {
      path:'/ShowCategory',
      name: 'Category',
      component: Category
    }
  ]
})
