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
      path: '/senuer',
      name: 'senier-page',
      component: require('@/components/SenuPage').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
