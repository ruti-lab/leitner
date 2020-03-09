import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Profile from './views/Profile.vue';
import Settings from './views/Settings.vue';
import About from './views/About.vue';
import NewBox from './views/NewBox.vue';
import Rehearsal from './views/Rehearsal.vue';

Vue.use(Router);

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Home,
        },
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
        {
            path: '/new-box',
            component: NewBox,
        },
        {
            path: '/box/:id',
            component: Rehearsal,
        },
    ],
});
