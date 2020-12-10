<template>
    <div class="wysiwyg" :class="{ [`-${option}`]: option }">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            option: {
                type: String
            }
        }
    }
</script>

<style src="./Wysiwyg.css"></style>

