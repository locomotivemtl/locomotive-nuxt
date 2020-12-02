<template>
    <component class="heading" :is="el" :class="{[`-${size}`]: size, [`-${option}`]: option }">
        <slot></slot>
    </component>
</template>

<script>
    export default {
        props: {
            el: {
                type: String,
                default: 'p'
            },
            size: {
                type: String
            },
            option: {
                type: String
            }
        }
    }
</script>

<style src="./Heading.css" scoped></style>

