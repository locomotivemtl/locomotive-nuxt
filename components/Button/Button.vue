<template>
    <button class="button" :class="this.getOption()" type="button">
        <svg-icon class="icon" :name="icon" v-if="icon" />
        <span class="label">
            <slot></slot>
            <div class="sub" v-if="this.$slots.sub">
                <slot name="sub"></slot>
            </div>
        </span>
    </button>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String
            },
        }
    }
</script>

<style src="./Button.css" scoped></style>

