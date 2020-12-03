<template>
    <Container class="u-text-center">
        <Heading size="h1">Locomotive Nuxt Boilerplate</Heading>

        <Wysiwyg>
            Simple nuxt starter with useful components.
        </Wysiwyg>

        <Button :option="['black', 'full']">
            Button component
        </Button>

        <ul>
            <li v-for="product in products.edges">
                {{product.node.title}}

                <div v-for="image in product.node.images.edges">
                    <img :src="image.node.originalSrc" alt="">
                </div>
            </li>
        </ul>
    </Container>
</template>

<script>
    import gql from 'graphql-tag'

    console.log('allo')

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
                                    images(first: 1) {
                                        edges {
                                            node {
                                                originalSrc
                                            }
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
            console.log(this)
        },
        // async fetch() {
        //     this.products = await this.$apollo.queries.products
        //     console.log(this.products)
        // },
        // fetchOnServer: false
    }
</script>

<style>

</style>
