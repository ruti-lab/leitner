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

@Component({
    name: 'Leitner',
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

<style  lang="scss" scoped>
</style>
