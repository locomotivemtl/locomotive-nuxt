<template>
    <div class="layoutItem"
         :class="[ {'-width': width}, {'-small': small}, {'-medium': medium}, {'-large': large}, { [`-${option}`]: option } ]"
         :style="{  '--width': this.width && this.width+'%', '--width-small': this.small && this.small+'%', '--width-medium': this.medium && this.medium+'%', '--width-large': this.large && this.large+'%' }">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            width: {
                type: String
            },
            tiny: {
                type: String
            },
            small: {
                type: String
            },
            medium: {
                type: String
            },
            large: {
                type: String
            },
            option: {
                type: String
            }
        }
    }
</script>

<style src="./LayoutItem.css" scoped></style>

