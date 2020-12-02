# Locomotive Nuxt Boilerplate
Locomotive Nuxt Boilerplate is built with [Nuxt.js](https://nuxtjs.org).

## Usage
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Styles
Styles are just CSS with some [PostCSS](https://github.com/postcss/postcss) plugins.

- [Nesting](https://github.com/jonathantneal/postcss-nesting)
- [Custom Media](https://github.com/postcss/postcss-custom-media)
- [Px to Rem](https://github.com/cuth/postcss-pxtorem)

There are some global styles in `/assets/styles/`.

- `settings.css`: Variables, custom medias, base fonts.
- `generic.css`: Resets.
- `elements.css`: Base elements.

But most styles are [scoped](https://vue-loader.vuejs.org/guide/scoped-css.html) in each component folder `/components/`.

Some components have an `option` prop, it applies a class to the component `-option`.

## State
Some components use namespaced global events `this.$root.$emit('ComponentName.eventName')` or normal events `this.$emit('eventName')` listened on `ref="eventName"`.

### Global
[Vuex](https://vuex.vuejs.org/) is also used for the global app state `this.$store.state.propName`. The store is located in `/store/`.

## Components
Some special components.

### Layout
The grid. Set the width in percentage for different screen sizes with attributes named from the custom medias `small`, `medium`, `large`... Or alway keep the same width with `width`.
```html
<Layout>
    <LayoutItem small="50" large="30"></LayoutItem>
    <LayoutItem width="50"></LayoutItem>
</Layout>
```

### Link
Add a `to` attribute to use the [Nuxt navigation]((https://nuxtjs.org/docs/2.x/features/nuxt-components#the-nuxtlink-component)) and transitions or `href` for standard links.
```html
<Link to="/page"></Link>
<Link href="#section"></Link>
```

### Heading
Set both the HTML element for semantics and the size for the style.
```html
<Heading el="h2" size="h3"></Heading>
<Heading el="p" size="h4"></Heading>
```

## Sprite
SVGs are used for icons and logos. SVGs in `/assets/sprite/svg/` are [combined in a sprite](https://github.com/nuxt-community/svg-sprite-module) and are used like this.

```html
<svg-icon name="logo" />
```

[ðŸš‚](https://locomotive.ca)
