<template>
    <v-container>
        <v-card class="user-card">
            <v-img
                v-show="avatarLoaded"
                :src="gravatar"
                class="user-card-image"
                @load="avatarLoaded = true"
            />
            <v-skeleton-loader
                v-if="!avatarLoaded"
                type="image"
            />

            <v-card-title v-if="user">
                {{ user.name }}
            </v-card-title>
            <v-skeleton-loader
                v-else
                type="card-heading"
                class="loader-heading"
            />

            <v-card-text class="card-text">
                <v-list>
                    <div v-if="user">
                        <v-list-item
                            v-for="(data, index) in user.metadata"
                            :key="index"
                        >
                            {{ data.label }}
                            <v-spacer />
                            <v-chip v-if="user">
                                {{ data.value }}
                            </v-chip>
                        </v-list-item>
                    </div>
                    <div v-else>
                        <v-list-item
                            v-for="index in 3"
                            :key="index"
                        >
                            <v-skeleton-loader
                                type="text"
                                class="loader-text"
                            />
                            <v-spacer />
                            <v-skeleton-loader
                                type="chip"
                                class="loader-chip"
                            />
                        </v-list-item>
                    </div>
                </v-list>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
    computed: {
        gravatar (): string {
            return this.user ? `https://www.gravatar.com/avatar/${this.user.hash}?s=600` : '';
        },
    },
})
/**
 * @class
 * @extends Vue
 */
export default class Profile extends Vue {
    user = null;
    avatarLoaded = false;

    /**
     * Fetch data on component mounted
     */
    async mounted (): Promise<void> {
        try {
            const response = await fetch('/api/user');
            if (response.ok) {
                this.user = await response.json();
                this.user.metadata = [
                    {
                        label: 'Number of box',
                        value: 6,
                    },
                    {
                        label: 'Number of cards',
                        value: 42,
                    },
                    {
                        label: 'Consecutive days',
                        value: 12,
                    },
                ];
            }
        }
        catch {
            // TODO: handle fail state
        }
    }
}
</script>

<style scoped lang="scss">
    .user-card {
        width: 600px;
        margin: 0 auto;

        .user-card-image {
            height: 200px;
        }

        .loader-heading {
            height: 64px;
        }

        .card-text {
            padding-top: 0;
        }

        .loader-text {
            width: 120px;
        }

        .loader-chip {
            width: 3em;
            border-radius: 99px;
        }
    }
</style>
