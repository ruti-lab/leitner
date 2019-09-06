import Vue from 'vue/dist/vue.esm';
import prepareVuetify from './plugins/vuetify.ts';

import Hello from './views/Hello.vue';

const vuetify = prepareVuetify(Vue);

const app = new Vue({
    vuetify,
    components: {
        Hello,
    },
    template: `
        <Hello/>
    `,
});

app.$mount('#app');
