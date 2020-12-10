<template>
    <select
        v-model="selectedId"
        @change="selectChange"
    >
        <option
            v-if="!selectFirst"
            value=""
            disabled
            selected
        >
            <slot name="select-prompt">
                Please select
            </slot>
        </option>

        <option
            v-for="variant in stripedVariants"
            :key="variant.id"
            :disabled="!variant.availableForSale"
            :value="variant.id"
        >
            {{ variant.title }}
        </option>
    </select>
</template>

<script>
    export default {
        props: {
            variants: {

            },
            selectFirst: {

            }
        },
        data() {
            return {
                selectedId: ""
            }
        },
        methods: {
            addToCart() {
                console.log('AddToCart')
            },
            selectChange() {
                // // Return the entire sleected varient object
                // const selectedVariant = _find(this.stripedVariants, {
                //     id: this.selectedId
                // })
            }
        },
        computed: {
            stripedVariants() {
                return this.variants.map(variant => variant.node)
            },
        }
    }
</script>

<style src="./ShopifySelectVariant.css" scoped></style>

