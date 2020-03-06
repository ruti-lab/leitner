<template>
    <v-card>
        <v-list
            subheader
            three-line
        >
            <v-subheader>User Controls</v-subheader>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Content filtering</v-list-item-title>
                    <v-list-item-subtitle>Set the content filtering level to restrict appts that can be downloaded</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Password</v-list-item-title>
                    <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-divider />

        <v-list
            flat
            subheader
            three-line
        >
            <v-subheader>General</v-subheader>

            <v-list-item-group
                v-model="settings"
                multiple
                active-class=""
            >
                <v-list-item>
                    <template v-slot:default="{ active }">
                        <v-list-item-action>
                            <v-checkbox v-model="active" />
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>Notifications</v-list-item-title>
                            <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                        </v-list-item-content>
                    </template>
                </v-list-item>

                <v-list-item>
                    <template v-slot:default="{ active }">
                        <v-list-item-action>
                            <v-checkbox v-model="active" />
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>Sound</v-list-item-title>
                            <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                        </v-list-item-content>
                    </template>
                </v-list-item>

                <v-list-item>
                    <template v-slot:default="{ active }">
                        <v-list-item-action>
                            <v-checkbox v-model="active" />
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>Auto-add widgets</v-list-item-title>
                            <v-list-item-subtitle>Automatically add home screen widgets when downloads complete</v-list-item-subtitle>
                        </v-list-item-content>
                    </template>
                </v-list-item>
            </v-list-item-group>
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
export default class Settings extends Vue {
    settings = []
}
</script>

<style scoped>

</style>
