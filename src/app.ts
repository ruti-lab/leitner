import Vue from 'vue/dist/vue.esm';
import vuetify from './plugins/vuetify.ts';

import Hello from './views/Hello.vue';

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
