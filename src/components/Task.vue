<template>
    <v-list-item :disabled="done">
        <v-checkbox
            disabled
            :input-value="done"
        />
        <span><slot /></span>
    </v-list-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
/**
 * @class
 * @extends Vue
 */
export default class Task extends Vue {
    @Prop(Boolean) done;
}
</script>

<style scoped>
    .v-list-item[aria-disabled] span {
        text-decoration: line-through;
    }
</style>
