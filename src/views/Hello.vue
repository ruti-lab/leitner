<template>
    <h1 class="greeting">
        {{ message }}
    </h1>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from "vue-property-decorator";

    @Component
    export default class Hello extends Vue {
        message = 'Hello';
    }
</script>

<style scoped lang="scss">
    $title-size: 50px;
    .greeting {
        font-size: $title-size;
    }
</style>
