<template>
    <Container>
        <NuxtLink to="/">Home page</NuxtLink>

        <div v-if="$apollo.loading">Loading...</div>
        <div v-else>
            <Grid gutter="20" col-medium="2">
                <GridItem>
                    <div v-for="image in product.images.edges">
                        <img :src="image.node.originalSrc" :alt="product.title">
                    </div>
                </GridItem>

                <GridItem>
                    <Heading size="h1">{{product.title}}</Heading>

                    <Wysiwyg>
                        <div v-html="product.descriptionHtml"></div>
                    </Wysiwyg>

                    <ShopifySelectVariant
                        :variants="this.product.variants.edges"
                        :select-first="false"

                    />

                    <ShopifyAddToCart />
                </GridItem>
            </Grid>
        </div>
    </Container>
</template>

<script>
    import gql from 'graphql-tag'

    export default {
        data: () => {
            return {
                product: {}
            }
        },
        apollo: {
            product: {
                client: "shopify",
                query: gql`
                    query getProductByHandle($handle: String!) {
                        productByHandle(handle: $handle) {
                            id
                            title
                            handle
                            productType
                            tags
                            descriptionHtml
                            vendor
                            images(first: 5) {
                                edges {
                                    node {
                                        originalSrc
                                    }
                                }
                            }
                            collections(first: 1) {
                                edges {
                                    node {
                                        handle
                                        title
                                    }
                                }
                            }
                            metafields(first: 5) {
                                edges {
                                    node {
                                        description
                                        key
                                        value
                                        namespace
                                        id
                                    }
                                }
                            }
                            priceRange {
                                maxVariantPrice {
                                    amount
                                    currencyCode
                                }
                                minVariantPrice {
                                    amount
                                    currencyCode
                                }
                            }
                            availableForSale
                            compareAtPriceRange {
                                maxVariantPrice {
                                    amount
                                    currencyCode
                                }
                                minVariantPrice {
                                    amount
                                    currencyCode
                                }
                            }
                            variants(first: 10) {
                                edges {
                                    node {
                                        # metafields
                                        id
                                        title
                                    }
                                }
                            }
                        }
                    }
                `,
                variables() {
                    return {
                        handle: this.$route.params.product
                    }
                },
                update(data) {
                    return data.productByHandle
                }
            }
        },
        mounted() {
            console.log(this.product.availableForSale)
            console.log(this.product.variants)
        },
        created() {
            console.log('loading:', this.$apollo.loading)
        }
    }
</script>

<style>

</style>
