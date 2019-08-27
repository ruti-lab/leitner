import Vue from 'vue/dist/vue';
import 'materialize-css/dist/js/materialize.min';

import Hello from './views/Hello.vue';

const app = new Vue({
    components: {
        Hello,
    },
    template: `
        <Hello/>
    `,
});

app.$mount('#app');
