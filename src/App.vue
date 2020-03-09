<template>
    <v-app class="app">
        <AppBar class="app-header" />
        <v-content>
            <router-view />
        </v-content>
    </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AppBar from './components/AppBar.vue';

Vue.directive('nofocus', {
    inserted (el) {
        el.onfocus = (ev): void => (ev.target as HTMLElement).blur();
    },
});

@Component({
    components: {
        AppBar,
    },
})
/**
 * @class
 * @extends Vue
 */
export default class App extends Vue {}
</script>
