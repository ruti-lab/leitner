<template>
    <h1>
        {{ message }}
    </h1>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
/**
 * @class
 */
export default class Hello extends Vue {
    message = 'Leitner';
}
</script>

<style lang="scss">
    @import "../styles/main";
    h1 {
        text-align: center;
        color: color("red", "base");
    }
</style>
