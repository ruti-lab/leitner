<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title>
                {{ title }}
            </v-toolbar-title>
        </v-app-bar>
        <v-content>
            <v-container>
                <v-btn
                    fixed
                    fab
                    bottom
                    right
                    color="primary"
                >
                    <v-icon>
                        mdi-plus
                    </v-icon>
                </v-btn>
            </v-container>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
/**
 * @class
 * @extends Vue
 */
export default class HelloView extends Vue {
    @Prop(String) title = 'Leitner';
}
</script>

<style lang="scss">
</style>
