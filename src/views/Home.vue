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
import { Vue, Component, Prop } from 'vue-property-decorator';
import AppBar from '../components/AppBar.vue';
import Box from '../components/Box.vue';

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
    @Prop(Array) boxes = [];
}
</script>

<style lang="scss">

</style>
