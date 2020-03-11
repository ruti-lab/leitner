<template>
    <v-container>
        <v-card>
            <v-card-title>App infos</v-card-title>
            <v-card-text>
                <v-list>
                    <v-list-item
                        v-for="(item, index) in list"
                        :key="index"
                    >
                        <v-list-item-content>
                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                                <v-list-item-subtitle v-html="item.content" />
                            </v-list-item-content>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { version } from '../../package.json';

@Component
/**
 * @class
 * @extends Vue
 */
export default class About extends Vue {
    list = [
        {
            title: 'Open Source Project',
            content: 'Leitner is open source ! Check it out on <a href="https://github.com/ruti-lab/leitner">Github</a>.',
        },
        {
            title: 'Issues',
            content: 'You encounter a bug or have trouble with the app ? '
                + 'Send us <a href="https://github.com/ruti-lab/leitner/issues/new">an issue</a>.',
        },
        {
            title: 'Version',
            content: `v${version}`,
        },
        {
            title: 'Privacy policy',
            content: 'We take your privacy very seriously and will never sell your data away. '
                + 'Read our <a href="">privacy policy</a> for more information.',
        },
        {
            title: 'RUTI-lab',
            content: '©️ 2020',
        },
    ];
}
</script>

<style scoped>

</style>
