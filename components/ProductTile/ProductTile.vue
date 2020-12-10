<template>
    <!-- TO DO ROUTING -->
    <NuxtLink class="product-tile" :to="`/products/${product.handle}`">
        <div v-if="product.availableForSale && product.compareAtPriceRange.minVariantPrice.amount > 0" class="product-tile_sale">
            <span class="product-tile_sale_label">Sale!</span>
        </div>

        <div class="product-tile_image-container" v-for="image in product.images.edges">
            <img :src="image.node.originalSrc" :alt="product.title">
        </div>

        <div class="product-tile_infos">
            <span class="product-tile_infos_label">{{product.title}}</span>

            <div class="product-tile_infos_prices">
                <span class="product-tile_infos_label">{{product.priceRange.maxVariantPrice.amount}} {{product.priceRange.maxVariantPrice.currencyCode}}</span>
                <span v-if="product.availableForSale && product.compareAtPriceRange.minVariantPrice.amount > 0" class="product-tile_infos_label -sale">{{product.compareAtPriceRange.minVariantPrice.amount}} {{product.compareAtPriceRange.minVariantPrice.currencyCode}}</span>
            </div>
        </div>
    </NuxtLink>
</template>

<script>
    export default {
        props: {
            product: {
                type: Object
            }
        },
        data() {
            return {

            }
        },
        mounted() {
            console.log(this.product)
        }
    }
</script>

<style src="./ProductTile.css" scoped></style>

