import Vue from 'vue/dist/vue.esm';
import vuetify from './plugins/vuetify';
import router from './router';

import App from './App.vue';
import './styles/main.scss';

const app = new Vue({
    vuetify,
    router,
    components: {
        App,
    },
    template: '<App/>',
});

app.$mount('#app');
