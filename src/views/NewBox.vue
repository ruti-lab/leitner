<template>
    <v-container>
        <v-form v-model="valid">
            <v-row>
                <v-col>
                    <v-text-field
                        v-model="title"
                        name="title"
                        :rules="[validateTitle]"
                        label="Title"
                        maxlength="25"
                        required
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-slider
                        v-model="nbNewCardsPerDay"
                        label="New cards each days"
                        name="nb"
                        class="align-center"
                        min="0"
                        max="10"
                        thumb-label="always"
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="center-content">
                    <v-color-picker
                        v-model="color"
                        class="color-picker"
                        hide-canvas
                        flat
                        hide-inputs
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn
                        :disabled="!valid"
                        color="success"
                        class="float-right"
                        @click="createBox"
                    >
                        Create
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
/**
 * @class
 * @extends Vue
 */
export default class NewBox extends Vue {
    title = '';
    nbNewCardsPerDay = 5;
    color = '#2196f3';
    valid = false;

    /**
     * Check the title value
     * @return {Boolean}
     */
    validateTitle (): boolean {
        return this.title.length >= 1;
    }

    /**
     * Send the form
     */
    async createBox (): Promise<void> {
        const body = new FormData(document.querySelector('form'));
        body.append('color', this.color);
        try {
            const response = await fetch('/api/create-box', {
                method: 'post',
                body,
            });
            if (response.ok) {
                const json = await response.json();
                this.$router.push(`/box/${json.id}`);
            }
            else {
                throw new Error('Unknown error.');
            }
        }
        catch {
            // TODO: handle fail state
        }
    }
}
</script>

<style scoped>
    .center-content {
        display: flex;
        justify-content: center;
    }

    .color-picker {
        width: 300px;
    }
</style>
