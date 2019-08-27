import Vue from 'vue/dist/vue';

import Hello from './views/Hello.vue';

const app = new Vue({
    components: {
        Hello,
    },
    template: `
        <Hello></Hello>
    `,
});

app.$mount('#app');
