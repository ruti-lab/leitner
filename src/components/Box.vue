<template>
    <v-col cols="12">
        <v-hover v-slot="{ hover }">
            <v-card
                href="/"
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
    </v-col>
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
    @Prop(String) title;
    @Prop(Number) nbCards;
    @Prop(Boolean) cardsLeftToAdd;
    @Prop(Boolean) cardsLeftToRehearse;
}
</script>

<style scoped lang="scss">

</style>
