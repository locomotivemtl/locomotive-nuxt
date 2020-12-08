<template>
    <Container class="u-text-center">
        <Heading size="h1">Locomotive Nuxt Boilerplate</Heading>

        <Wysiwyg>
            Simple nuxt starter with useful components.
        </Wysiwyg>

        <Button :option="['black', 'full']">
            Button component
        </Button>

        <div v-if="$apollo.loading">Loading...</div>
        <div v-else>
            <Layout>
                <LayoutItem v-for="(product, index) in products.edges" :key="index" width="50" medium="33">
                    <ProductTile
                        :product="product.node"
                        :index="index"
                    />
                </LayoutItem>
            </Layout>
        </div>
    </Container>
</template>

<script>
    import gql from 'graphql-tag'

    export default {
        data: () => {
            return {
                products: {}
            }
        },
        apollo: {
            products: {
                client: 'shopify',
                query: gql`
                    query getProducts {
                        products(first: 99) {
                            edges {
                                node {
                                    id
                                    title
                                    handle
                                    images(first: 1) {
                                        edges {
                                            node {
                                                originalSrc
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
                                }
                            }
                        }
                    }
                `
            },
        },
        mounted() {
            console.log('loading:', this.$apollo.loading)
        },
        created() {
            console.log('loading:', this.$apollo.loading)
        }
    }
</script>

<style>

</style>
