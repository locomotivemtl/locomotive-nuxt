<template>
    <div>
        <Nuxt />
    </div>
</template>

<script>
    import Vue from 'vue'
    import globals from '~/mixins/globals.js'

    Vue.mixin(globals)

    export default {
        mounted() {

        }
    }
</script>

