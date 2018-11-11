import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default,
    },
    {
      path: '/sainuer',
      name: 'sainier-page',
      component: require('@/components/SaiNuPage').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
