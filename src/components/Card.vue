<template>
    <transition name="appear">
        <div class="card">
            <div
                ref="card"
                class="card-flipper"
            >
                <v-card
                    v-nofocus
                    class="face answer"
                    :ripple="false"
                    @click="flip"
                >
                    <v-card-title class="text-center">
                        {{ answer }}
                    </v-card-title>
                    <v-card-text>
                        Whatever the user want to add as text.
                    </v-card-text>
                </v-card>
                <v-card
                    v-nofocus
                    class="face question"
                    :ripple="false"
                    @click="flip"
                >
                    <v-card-title class="text-center">
                        {{ question }}
                    </v-card-title>
                    <v-card-text>
                        Whatever the user want to add as text.
                    </v-card-text>
                </v-card>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    computed: {
        card (): HTMLElement {
            return this.$refs.card;
        },
    },
})
/**
 * @class
 * @extends Vue
 */
export default class Card extends Vue {
    @Prop(String) question;
    @Prop(String) answer;
    card;

    /**
     * Flip
     */
    flip (): void {
        this.card.classList.toggle('flipped');
    }
}
</script>

<style scoped lang="scss">
    .card {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        perspective: 900px;
        transform-origin: center 200%;

        &.appear-enter-active, &.appear-leave-active {
            transition: transform .3s, opacity .3s;
        }
        &.appear-enter {
            transform: rotateZ(20deg);
        }
        &.appear-leave-to {
            transform: rotateZ(-20deg);
        }
        &.appear-enter, &.appear-leave-to {
            opacity: 0;
        }

        .card-flipper {
            position: relative;
            width: 50%;
            margin: 0 auto;
            min-width: 300px;
            height: 100%;
            transition: transform ease-out .5s;
            will-change: transform;
            transform-style: preserve-3d;

            &.flipped {
                transform: rotateY(180deg);
            }

            .face {
                position: absolute;
                width: 100%;
                height: 100%;

                .text-center {
                    display: block;
                }
            }

            .answer {
                transform: rotateY(180deg);
            }
        }
    }
</style>
