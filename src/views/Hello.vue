<template>
    <h1 class="greeting">{{message}}</h1>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default class Hello extends Vue {
        message:string = 'Hello';
    }
</script>

<style scoped>
    .greeting {
        font-size: 50px;
    }
</style>
