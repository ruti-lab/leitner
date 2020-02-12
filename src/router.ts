import Vue from 'vue';
import Router from 'vue-router';
import Profile from './views/Profile.vue';
import Settings from './views/Settings.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/profile',
            component: Profile,
        },
        {
            path: '/settings',
            component: Settings,
        },
        {
            path: '/about',
            component: About,
        },
    ],
});
