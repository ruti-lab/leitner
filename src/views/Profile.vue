<template>
    <v-card>
        <v-list
            subheader
            three-line
        >
            <v-subheader>Account information</v-subheader>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Lorem ipsum</v-list-item-title>
                    <v-list-item-subtitle>Voluptas perspiciatis ab quo. Possimus ex numquam natus ducimus assumenda odio quia ea. </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Lorem ipsum</v-list-item-title>
                    <v-list-item-subtitle>Voluptas perspiciatis ab quo. Possimus ex numquam natus ducimus assumenda odio quia ea. </v-list-item-subtitle>
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
export default class Profile extends Vue {
}
</script>

<style scoped>

</style>
