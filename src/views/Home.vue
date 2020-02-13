<template>
    <v-app>
        <AppBar />
        <v-content>
            <v-container>
                <v-row>
                    <Box
                        v-for="(box, index) in boxes"
                        :key="index"
                        :title="box.title"
                        :nb-cards="box.nbCards"
                        :cards-left-to-add="box.cardsLeftToAdd"
                        :cards-left-to-rehearse="box.cardsLeftToRehearse"
                    />
                </v-row>
            </v-container>
            <v-btn
                fixed
                fab
                bottom
                right
                color="primary"
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AppBar from '../components/AppBar.vue';
import Box from '../components/Box.vue';

interface BoxI {
    title: string;
    nbCards: number;
    cardsLeftToAdd: number;
    cardsLeftToRehearse: number;
}

@Component({
    components: {
        AppBar,
        Box,
    },
})
/**
 * @class
 * @extends Vue
 */
export default class Home extends Vue {
    apiUrl = '';
    boxes: Array<BoxI> = [];

    /**
     * Fetch data on component mounted
     */
    async mounted (): Promise<void> {
        // const response = await fetch(this.apiUrl);
        // if (response.ok) {
        //     this.boxes = await response.json();
        // }
        // Todo: Remove mock
        this.boxes = [
            {
                title: 'Learn spanish',
                nbCards: 10,
                cardsLeftToAdd: 5,
                cardsLeftToRehearse: 0,
            },
            {
                title: 'Guitar lesson',
                nbCards: 120,
                cardsLeftToAdd: 0,
                cardsLeftToRehearse: 0,
            },
        ];
    }
}
</script>
