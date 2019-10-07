# Flexgrid - a simple grid based on flexbox layout

[![Build Status](https://travis-ci.org/moso/flexgrid.svg?branch=master)](https://travis-ci.org/moso/flexgrid)

No more floats! Regular grid layout is based on both block and inline flow directions, however, the flexbox (or just flex) layout is based on "flex-flow directions". Thus `float` and `clear` have no effect. Using `float` causes the `display`-property to compute to `block`. Using `flexbox` also means less JavaScript! And everything is, of course, responsive and stacks perfectly.

**Please note:** Flexbox is only partially supported by IE10. Any IE-version lower than 10 does not support flexbox. However, Flexgrid utilizes the power of `autoprefixer`, so IE10 is relatively safe with prefixes. More info on [Can I Use](http://caniuse.com/#search=flex).

### Changelog

**3.0.0 (2019-10-07)**
- Complete transition to webpack
- Rewrite of the grid generator
- Simplified alignment class names
- Added margin utilities
- Added `space-evenly` (note: no support in IE)
- Ditched Tailwind syntax (use 2.x branch if you need it)

Older changelogs can be found in the 2.x branch.

## Documentation

You find everything fully documented at the [Docs page](https://docs.flexgrid.io).

## Packages

Use your favorite package manager to install Flexgrid

NPM:
```bash
$ npm install flexgrid.io
```

Yarn:
```bash
$ yarn add flexgrid.io
```

You can then easily import Flexgrid to your existing Sass/SCSS file:
```scss
@import 'flexgrid.io/src/flexgrid';
```

You can also just download a zipfile of the [latest release](https://github.com/moso/flexgrid/releases/latest/download/flexgrid.zip).

## Classes

Flexgrid now has 5 classes, compared to 4 in v1. You might find these familiar, as these resemble [Bootstrap]:
- xs (xtra small - for mobile devices and small tablets)
- sm (small - for large mobile devices and tablets)
- md (medium - for tablets and very small laptops)
- lg (large - for smaller laptops and -desktops)
- xl (xlarge - for desktops)

The classes can be combined to create more dynamic and flexible layouts.

**Pro tip**: Each class scales up, so if you wish to set the same widths for `sm` and `md`, you only need to specify `sm`.

## .container and .container-fluid

Flexgrid comes with responsive containers that boxes the content in which are controlled by `@media`-queries. These `@media`-queries trigger at the same widths defined by the [Bootstrap](https://getbootstrap.com)-framework. However, as a small detail, Flexgrid bases its width-triggers on `rem` instead of `px`. This creates a much more fluid layout. While `em` is relative to the `font-size` of its direct or nearest parent, `rem` is only relative to the `html` (root) `font-size`. Flexgrid `font-size` is set to `16px`. There is also a fluid container that has no `@media`-queries.

```html
<!-- Container -->
<div class="container">
  ...
</div>

<!-- Container fluid -->
<div class="container-fluid">
  ...
</div>
```

## Columns

Flexgrid comes with columns with percent-based widths allow fluid resizing of columns and rows. Rows acts as alignment containers.

![columns](https://flexgrid.io/old/img/columns.png)

```html
<div class="container">
  <div class="row">
    <div class="md-12">.md-12</div>
    <div class="md-11">.md-11</div>
    <div class="md-1">.md-1</div>
    ...
    <div class="md-6">.md-6</div>
    <div class="md-6">.md-6</div>
    ...
  </div>
</div>
```

## Editing the source

It's easy to modify the source. Clone this repository and edit away. Flexgrid comes with [webpack](https://webpackjs.org) that compiles the source for you with a single command.

##### Requirements

Compiling the source requires a terminal, and [Node.js](https://nodejs.org) at least v6, or [Yarn](https://yarnpkg.com).

To install the dependencies, you just run:
```bash
$ npm install # yarn install
```

When you're done editing, you just run:
```bash
$ npm run build # yarn run build
```

This will compile a regular `.css`-file, and a minified `.min.css`-file to the `/dist`-folder.

## Contributing

PR's are welcome.

## License

[MIT](https://github.com/moso/flexgrid/blob/master/LICENSE)
