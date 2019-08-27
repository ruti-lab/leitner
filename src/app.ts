import Vue from 'vue/dist/vue.js';

import Hello from './views/Hello.vue';

new Vue({
    el: '#app',
    components: {
        Hello,
    },
    template: `
        <Hello></Hello>
    `,
});
