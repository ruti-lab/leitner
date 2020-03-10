<template>
    <v-container>
        <Box
            v-for="(box, index) in boxes"
            :id="box.id"
            :key="index"
            :title="box.title"
            :nb-cards="box.nbCards"
            :cards-left-to-add="box.cardsLeftToAdd"
            :cards-left-to-rehearse="box.cardsLeftToRehearse"
        />
        <Box v-if="!boxes.length" />

        <v-btn
            fixed
            fab
            bottom
            right
            color="primary"
            to="new-box"
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Box from '../components/Box.vue';

interface BoxI {
    id: string;
    title: string;
    nbCards: number;
    cardsLeftToAdd: number;
    cardsLeftToRehearse: number;
}

@Component({
    components: {
        Box,
    },
})
/**
 * @class
 * @extends Vue
 */
export default class Home extends Vue {
    boxes: Array<BoxI> = [];

    /**
     * Fetch data on component mounted
     */
    async mounted (): Promise<void> {
        try {
            const response = await fetch('/api/boxes');
            if (response.ok) {
                this.boxes = await response.json();
            }
        }
        catch {
            // TODO: handle fail state
        }
    }
}
</script>
