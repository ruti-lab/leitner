<template>
    <v-card>
        <v-list
            subheader
            two-line
        >
            <v-subheader>App info</v-subheader>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Open Source Project</v-list-item-title>
                    <v-list-item-subtitle>Leitner is open source ! Check it out on GitHub</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>App Version</v-list-item-title>
                    <v-list-item-subtitle>14.42.666</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
/**
 * @class
 * @extends Vue
 */
export default class About extends Vue {
}
</script>

<style scoped>

</style>
