// @ts-ignore
// import Vue from 'vue';
import Vue from 'vue/dist/vue.js';

import Hello from './views/Hello.vue';

const app = new Vue({
    el: '#app',
    template: `
        <Hello></Hello>
    `,
    components: {
        Hello,
    }
});
