import Vue from 'vue';
import Router from 'vue-router';
import MovieList from './views/MovieList.vue'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/purchasing/',
        name: 'purchasing',
        component: () =>
            import (/* webpackChunkName: 'Purchasing Screen' */ "./views/PurchasingScreen"),
        props: { movie: 'movie' }
    },
    {
        path: '/',
        name: 'home',
        component: MovieList,
    },
    {
        path: '/addMovie',
        name: 'addMovie',
        component: () =>
            import (/* webpackChunkName: 'Movie List' */ "./components/MovieListForm")
    },
    {   path: '/credits',
        name: 'credits',
        component: () =>
            import (/* webpackChunkName: 'Credits' */ "./views/Credits"),
        props: { newOrder: 'newOrder'}
    },
    {
        path: '/review',
        name: 'review',
        component: () =>
            import (/* webpackChunkName: 'Error' */ "./views/review")
    },
  ]
});
export default router;
