import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

// 自定义组件
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import Banner_ad from "./components/Banner_ad.vue"
import Column from "./components/column.vue"
import content from "./components/content.vue"


// 页面
import sum from "./views/sum.vue"
import articles from "./views/articles.vue"
import contact from "./views/contact.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:"/header",
      name:'header',
      component:Header
    },
    {
      path:"/footer",
      name:'footer',
      component:Footer
    },
    {
      path:"/sum",
      name:"sum",
      component:sum
    },
    {
      path:"/banner_ad",
      name:"Banner_ad",
      component:Banner_ad
    },
    {
      path:"/column",
      name:"column",
      component:Column
    },
    {
      path:"/articles",
      name:"articles",
      component:articles
    },
    {
      path:"/contact",
      name:"contact",
      component:contact
    },
    {
      path:"/content",
      name:"content",
      component:content
    },
    
  ]
})
