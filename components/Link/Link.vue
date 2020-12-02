<template>
    <NuxtLink v-if="to" :to="to" :exact="exact" v-bind="$attrs">
        <slot></slot>
    </NuxtLink>
    <a v-else-if="href" :href="href" v-bind="$attrs">
        <slot></slot>
    </a>
    <span v-else v-bind="$attrs">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        props: ['to', 'exact', 'href']
    }
</script>

<style src="./Link.css" scoped></style>
