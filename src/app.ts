import Vue from 'vue/dist/vue.esm';
import vuetify from './plugins/vuetify.ts';
import router from './router.ts';

import Home from './views/Home.vue';

const app = new Vue({
    vuetify,
    router,
    components: {
        Home,
    },
    template: '<Home/>',
});

app.$mount('#app');
