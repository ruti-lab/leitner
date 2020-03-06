import Vue from 'vue/dist/vue.esm';
import vuetify from './plugins/vuetify.ts';
import router from './router.ts';

import App from './App.vue';

const app = new Vue({
    vuetify,
    router,
    components: {
        App,
    },
    template: '<App/>',
});

app.$mount('#app');
