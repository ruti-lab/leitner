<template>
    <v-container>
        <v-card>
            <v-card-title>Settings</v-card-title>
            <v-card-text>
                <v-list
                    three-line
                    flat
                >
                    <v-list-item-group
                        v-model="settings"
                        multiple
                        @change="changeSettingsActivation"
                    >
                        <v-list-item value="notif">
                            <template v-slot:default="{ active }">
                                <v-list-item-action>
                                    <v-switch v-model="active" />
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>Notifications</v-list-item-title>
                                    <v-list-item-subtitle>
                                        Remember me everyday to rehearse my cards.
                                    </v-list-item-subtitle>

                                    <div class="time-picker-wrapper">
                                        <v-dialog
                                            ref="timePicker"
                                            v-model="showTimePickerModal"
                                            :return-value.sync="time"
                                            width="290px"
                                        >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                    v-model="time"
                                                    label="Time of notification"
                                                    prepend-icon="mdi-clock-outline"
                                                    :disabled="!settings.includes('notif')"
                                                    readonly
                                                    hide-details
                                                    v-on="on"
                                                />
                                            </template>
                                            <v-time-picker
                                                v-if="showTimePickerModal"
                                                v-model="time"
                                                ampm-in-title
                                                @click:minute="saveNotificationTime"
                                            />
                                        </v-dialog>
                                    </div>
                                </v-list-item-content>
                            </template>
                        </v-list-item>
                        <v-divider />
                        <v-list-item value="dark">
                            <template v-slot:default="{ active }">
                                <v-list-item-action>
                                    <v-switch v-model="active" />
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>Dark Theme</v-list-item-title>
                                    <v-list-item-subtitle>
                                        Active the dark theme.
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </template>
                        </v-list-item>
                    </v-list-item-group>
                    <v-divider />
                    <v-list-item>
                        <v-dialog
                            v-model="showConfirmDeletionModal"
                            max-width="400px"
                            persistent
                        >
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    color="error"
                                    v-on="on"
                                >
                                    Delete all my data
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title>You sure ?</v-card-title>
                                <v-card-text>
                                    Removing all your data is a one way operation and you will loose all your progress.
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn @click="showConfirmDeletionModal = false">
                                        Cancel
                                    </v-btn>
                                    <v-spacer />
                                    <v-btn
                                        color="primary"
                                        @click="deleteAllData"
                                    >
                                        Sure !
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { ThisisBS } from 'vuetify/es5/components';

@Component
/**
 * @class
 * @extends Vue
 */
export default class Settings extends Vue {
    settings = ['dark'];
    time = '13:37';
    previousTime = this.time;
    showTimePickerModal = false;
    showConfirmDeletionModal = false;

    /**
     * Change selected settings
     */
    changeSettingsActivation (): void {
        // FIXME: cast to any
        (this.$root as any).$vuetify.theme.isDark = this.settings.includes('dark');
        console.log([...this.settings]);
        // Save to server
    }

    /**
     * Save the time for notification
     */
    saveNotificationTime (): void {
        // FIXME: Find TimePicker type
        (this.$refs.timePicker as ThisisBS).save(this.time);
        if (this.time !== this.previousTime) {
            console.log(this.time);
            // Save to server
            this.previousTime = this.time;
        }
    }

    /**
     * User ask for data removal
     */
    deleteAllData (): void {
        this.showConfirmDeletionModal = false;
        // Delete all user's data from server
    }
}
</script>

<style scoped lang="scss">
    .time-picker-wrapper {
        flex: 0 0 200px;
    }
</style>
