<template>
    <v-row>
        <v-col>
            <v-hover
                v-if="id"
                v-slot="{ hover }"
            >
                <v-card
                    :to="`box/${id}`"
                    :elevation="hover ? 8 : 1"
                    :disabled="!cardsLeftToAdd && !cardsLeftToRehearse"
                >
                    <v-card-title>
                        {{ title }}
                    </v-card-title>
                    <v-list>
                        <Task :done="cardsLeftToAdd === 0">
                            {{ cardsLeftToAdd }} card{{ cardsLeftToAdd > 1 ? "s" : "" }} to add
                        </Task>
                        <Task :done="cardsLeftToRehearse === 0">
                            {{ cardsLeftToRehearse }} card{{ cardsLeftToRehearse > 1 ? "s" : "" }} to rehearse
                        </Task>
                    </v-list>
                </v-card>
            </v-hover>
            <v-card v-else>
                <v-skeleton-loader
                    type="card-heading"
                    class="loader-heading"
                />
                <v-list>
                    <v-skeleton-loader
                        type="text"
                        class="loader-list-item"
                    />
                    <v-skeleton-loader
                        type="text"
                        class="loader-list-item"
                    />
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Task from './Task.vue';

@Component({
    components: {
        Task,
    },
})
/**
 * @class
 * @extends Vue
 */
export default class Box extends Vue {
    @Prop(String) id;
    @Prop(String) title;
    @Prop(Number) nbCards;
    @Prop(Number) cardsLeftToAdd;
    @Prop(Number) cardsLeftToRehearse;
}
</script>

<style lang="scss" scoped>
    .loader-heading {
        height: 64px;
    }

    .loader-list-item {
        height: 66px;
        width: 220px;
        display: flex;
        align-items: center;
        padding: 0 16px;
    }
</style>
