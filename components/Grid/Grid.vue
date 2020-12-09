<template>
    <div
        :class="[
            'grid',
            {'-gutter': gutter},
            {'-col': col},
            {'-col-small': colSmall},
            {'-col-medium': colMedium},
            {'-col-large': colLarge}
        ]"
        :style="{
            '--gutter': this.gutter && this.gutter+'px',
            '--col': this.col,
            '--col-small': this.colSmall,
            '--col-medium': this.colMedium,
            '--col-large': this.colLarge
        }"
    >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            gutter: {
                type: String
            },
            col: {
                type: String
            },
            colSmall: {
                type: String
            },
            colMedium: {
                type: String
            },
            colLarge: {
                type: String
            },
        }
    }
</script>

<style src="./Grid.css" scoped></style>

