<template class="whatever">
    <v-container class="rehearsal-container">
        <h1 class="box-title">
            <span v-if="title">
                {{ title }}
            </span>
            <v-skeleton-loader
                v-else
                type="heading"
            />
        </h1>
        <div class="card-list">
            <Card
                v-for="(card, index) in data"
                v-show="showCard(index)"
                :key="index"
                :question="card.question"
                :answer="card.answer"
            />
        </div>
        <transition name="scroll-in">
            <v-row
                v-show="showButtons"
                class="buttons"
            >
                <v-btn
                    v-nofocus
                    fab
                    class="btn btn-error"
                    color="error"
                    x-large
                    @click.stop="nextCard(false)"
                >
                    <v-icon>
                        mdi-close
                    </v-icon>
                </v-btn>
                <v-spacer />
                <v-btn
                    v-nofocus
                    fab
                    class="btn btn-success"
                    color="primary"
                    x-large
                    @click.stop="nextCard(true)"
                >
                    <v-icon>
                        mdi-check
                    </v-icon>
                </v-btn>
            </v-row>
        </transition>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Card from '../components/Card.vue';

@Component({
    components: {
        Card,
    },
    computed: {
        showButtons (): boolean {
            return this.data.length > 0;
        },
    },
})
/**
 * @class
 * @extends Vue
 */
export default class Rehearsal extends Vue {
    data = [];
    current = 0;
    title = '';

    /**
     * Fetch data on component mounted
     */
    async mounted (): Promise<void> {
        try {
            const response = await fetch(`/api/box/${this.$route.params.id}`);
            if (response.ok) {
                const { title, cards } = await response.json();
                this.title = title;
                // May want to shuffle https://javascript.info/task/shuffle
                this.data = cards;
            }
        }
        catch {
            // TODO: handle fail state
        }
    }

    /**
     * Should a given card be shown
     * @param {Number} index - Index to check
     * @return {Boolean}
     */
    showCard (index: number): boolean {
        return index === this.current;
    }

    /**
     * Go to the next card
     * @param {Boolean} success - Does the card was successful
     */
    nextCard (success: boolean): void {
        this.data[this.current].result = success;
        if (this.current < this.data.length - 1) {
            this.current += 1;
        }
        else {
            console.log(this.data.map(({ result }) => result));
            // Send data to server
        }
    }
}
</script>

<style scoped lang="scss">
    .rehearsal-container {
        overflow: hidden;
    }

    .box-title {
        padding: 1em;
    }

    .card-list {
        position: relative;
        height: 50vh;
        box-sizing: content-box;
    }

    .buttons {
        overflow: hidden;
        padding: 2em 1em;

        &.scroll-in-enter {
            .btn {
                transition: transform ease-out .3s;
            }
        }
        &.scroll-in-enter-active {
            .btn-error {
                transform: translate(-72px, 0);
            }
            .btn-success {
                transform: translate(72px, 0);
            }
        }
    }
</style>
