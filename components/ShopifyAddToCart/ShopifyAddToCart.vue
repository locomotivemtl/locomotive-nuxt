<template>
    <Button @click.native="addToCart">
        Add to cart
    </Button>
</template>

<script>
    export default {
        props: {
            // option: {
            //     type: String
            // }
        },
        methods: {
            addToCart() {
                console.log('AddToCart')
            }
        }
    }
</script>

<style src="./ShopifyAddToCart.css" scoped></style>

