<p align="center"><img src="https://rawcdn.githack.com/moso/flexgrid/5d896d643a77e5a494236094f98d9d44035b1690/assets/flexgrid-banner.svg"></p>

<p align="center"><a href="https://app.netlify.com/sites/flexgrid-build/deploys"><img src="https://img.shields.io/netlify/f2557415-f8a5-4ba8-a315-75b661a90178?label=build&logo=netlify&style=flat-square"></a> <a href="https://travis-ci.org/moso/flexgrid"><img src="https://img.shields.io/travis/moso/flexgrid/master?logo=travis&style=flat-square"></a> <a href="https://circleci.com/gh/moso/flexgrid"><img src="https://img.shields.io/circleci/build/github/moso/flexgrid/master?logo=circleci&style=flat-square"/></a> <a href="https://github.com/moso/flexgrid/releases/latest"><img src="https://img.shields.io/github/v/release/moso/flexgrid?logo=github&style=flat-square"></a> <a href="https://npmjs.com/package/flexgrid.io"><img src="https://img.shields.io/npm/v/flexgrid.io?logo=npm&style=flat-square"></a> <a href="https://npmjs.com/package/flexgrid.io"><img src="https://img.shields.io/npm/dt/flexgrid.io?logo=npm&style=flat-square"></a> <a href="https://npmjs.com/package/flexgrid.io"><img src="https://img.shields.io/npm/dm/flexgrid.io?logo=npm&style=flat-square"></a></p></p>

---

##### No more floats. Containers and columns made easy.

Regular grid layout is based on both block and inline flow directions, however, the flexbox (or just flex) layout is based on "`flex-flow` directions". Thus `float` and `clear` have no effect. Using `float` actually causes the `display`-property to compute back to `block`. Using flexbox also means less JavaScript! And Flexgrid is, of course, responsive, mobile-first in mind, and stacks perfectly.

Flexgrid is open-source and everything can easily be modified. Let's say you want more or less than the standard 12 columns. Because Flexgrid is made with SCSS, you only have to edit a single digit, and then recompile. The entire sourcecode is available here on GitHub, where you're also welcome to fork the project.

**Please note**: Flexbox is only partially supported by IE 10. Any IE-version lower than 10 does not support flexbox. However, Flexgrid is powered by [Autoprefixer](https://github.com/postcss/autoprefixer) that use [Browserslist](https://github.com/browserslist/browserslist), which gets its data from [Can I Use](https://caniuse.com). By configuring autoprefixer, Flexgrid is supported all the way down to IE 10. Flexgrid also makes sure to support the latest [Firefox ESR release](https://www.mozilla.org/en-US/firefox/enterprise).

---

## Documentation

You find everything fully documented at the new [Docs page](https://docs.flexgrid.io).

## Packages

Use your favorite package manager to install Flexgrid

NPM:
```bash
$ npm install --save flexgrid.io
```

Yarn:
```bash
$ yarn add flexgrid.io
```

You can then easily import Flexgrid to your existing Sass/SCSS file:
```scss
@import 'flexgrid.io/src/flexgrid';
```

## CDN

You can find Flexgrid on most public CDNs that cache npm packages, like unpkg, which will also pick up the correct version number if set up correctly:
```html
<link rel="stylesheet" href="https://unpkg.com/flexgrid.io/dist/flexgrid.min.css">
```

If you need margin utilities included, you can add it the same way:
```html
<link rel="stylesheet" href="https://unpkg.com/flexgrid.io/dist/flexgrid-utils.min.css">
```

### v2.5.2

If you for some reason want the latest old version, you can easily install it with NPM/Yarn as well:
```bash
$ npm install --save flexgrid.io@2.5.2 # yarn add flexgrid@2.5.2
```

A direct link for unpkg will need you to specify the version number like so: `https://unpkg.com/flexgrid.io@2.5.2/dist/flexgrid.min.css`

## Classes

Flexgrid comes with 5 easy recognizable classes, if you're familiar with [Bootstrap]:
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

## Row

The row is where it all happens. Whether you want to align your content, or you simply just want columns, the `.row`-class is the one that sets `display: flex`.

## Columns

Flexgrid comes with columns with percent-based widths allow fluid resizing of columns and rows. Rows acts as alignment containers.

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

## Alignment, offsets, margin, etc

Flexgrid comes with a lot built-in methods to align your content the way you like it. It's never been easier to "center-center" your content. You can even offset columns or reorder them - and this follows the same pattern of being responsive and scalable.

It also comes with an optional utility toolbox where you can use margin as a way to offset/align your content. If you want these enabled, look below.

## Limitations

*__Flexgrid is not a framework__*, thus you won't find every single flexbox property in Flexgrid. As per the name, Flexgrid revolves around being a grid for building layouts.

**However**, Flexgrid \*does\* come with some of the most used properties, like alignment, offsets, margin utilities, etc. But to save space and to stick with the scope of the project, you won't find classes that sets `display: flex` on elements, handles `flex-direction`, `flex-wrap`, and so on. I trust you to handle these yourself should you want to build more advanced layouts. However, there are mixins inside the source code for all of these, and thus very easy to build in the classes yourself.

A good example is the flexbox mixin found in `/src/mixins/_flexgrid-mixins.scss`:
```scss
@mixin flexbox {
    display: flex;
}
```

If you want expand Flexgrid and build a class into it that, in this case, sets `display: flex`, it can easily be done by using the mixin:

```scss
.flex {
    @include flexbox();
}
```

Just remember to `@import` the mixins if you're not just editing the source (see below).

## Editing the source

It's easy to modify the source. Clone this repository and edit away. Flexgrid comes with [webpack](https://webpackjs.org) that compiles the source for you with a single command.

If you want margin utilities enabled by default, just set the `$enable-utils`-variable to `true` and recompile. This variable can even be overwritten in your own SCSS-variables file if you're using Flexgrid as part of a project, as it's got the `!default`-flag. Just remember to import Flexgrid before your own variables.

##### Requirements

Compiling the source requires a terminal, and [Node.js](https://nodejs.org) at least v12 (LTS), or [Yarn](https://yarnpkg.com).

To install the dependencies, you just run:
```bash
$ npm install # yarn install
```

When you're done editing, you just run:
```bash
$ npm run build # yarn run build
```

This will compile a regular `.css`-file, and a minified `.min.css`-file to the `/dist`-folder.

### Changelog

**3.0.4 (2019-12-19)**
- Security updates
- Updated Netlify config
- Updated Travis CI config
- Updated CircleCI config

**3.0.3 (2019-10-18)**
- Updated webpack config
- Update of README with new documentation
- Removed `package-lock.json` from the project

**3.0.2 (2019-10-17)**
- Added compiled build including utilities. Find them at `/dist/flexgrid-utils.css`, etc.
- Minor code clean-up

**3.0.1 (2019-10-14)**
- Renamed `_flexgrid` to `_gridgenerator` after discovering some `@import` issues in external projects because of name clashing
- Updated dependencies

**3.0.0 (2019-10-09)**
- Complete transition to webpack
- Rewrite of the grid generator
- Simplified alignment class names
- Added optional margin utilities
- Added `space-evenly` (note: no support in IE, `space-between` is used as fallback)
- Ditched Tailwind syntax (use 2.x branch if you need it)
- Discarded demo files - use the new documentation website

Older changelogs can be found in the 2.x branch.

## Contributing

PR's are ~~welcome~~ encouraged.

## License

[MIT](https://github.com/moso/flexgrid/blob/master/LICENSE)
