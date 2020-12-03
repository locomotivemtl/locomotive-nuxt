export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'locomotive-nuxt',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/styles/settings.css',
        '~/assets/styles/generic.css',
        '~/assets/styles/elements.css',
        '~/assets/styles/utilities.css',
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/apollo',
    ],

    /*
     ** Apollo options. Used for Graph QL queries
     ** See: https://www.apollographql.com/docs/link/links/http.html#options
     */
    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: "https://api.graphqlplaceholder.com/",
                persisting: false
            },
            shopify: {
                httpEndpoint: "https://loco-test-commerce1.myshopify.com/api/2020-10/graphql.json",
                httpLinkOptions: {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Shopify-Storefront-Access-Token": "e3c3e40ac812da65f62b6cf949d3d25c"
                    }
                },
                persisting: false
            }
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        postcss: {
            // Add plugin names as key and arguments as value
            // Install them before as dependencies with npm or yarn
            plugins: {
                'postcss-nesting': {},
                'postcss-custom-media': {},
                'postcss-pxtorem': {
                    propList: ['*'],
                    minPixelValue: 3,
                    rootValue: 16,
                }
            }
        }
    }
}
