# Flexgrid - a simple grid based on flexbox layout

[![Build Status](https://travis-ci.org/moso/flexgrid.svg?branch=master)](https://travis-ci.org/moso/flexgrid)

No more floats! Regular grid layout is based on both block and inline flow directions, however, the flexbox (or just flex) layout is based on "flex-flow directions". Thus `float` and `clear` have no effect. Using `float` causes the `display`-property to compute to `block`. Using `flexbox` also means less JavaScript! Everything is, of course, responsive and stacks perfectly.

**Please note:** Flexbox is only partially supported by IE10. Any IE-version lower than 10 does not support flexbox. However, Flexgrid has many fallbacks included, so IE11 should be safe. More info [here].

Flexgrid is an integral part of the upcoming [Nano Framework](https://github.com/getnano/nano-framework), where Flexgrid is the standard grid-system and provides a stable flexbox skeleton.

### Demo
A live demo is available here: [DEMO]

### Packages

If you want to download Flexgrid using either **NPM** or **Yarn**.

NPM:
```
npm install flexgrid.co
```

Yarn:
```
yarn add flexgrid.co
```

### Changelog
**2.2.0 (2017-06-02)**
- Ditched gulp for webpack done with Laravel Mix. See below for new instructions.

**2.1.1 (2017-02-02)**
- Added `max-width` to containers without `@media`-query

**2.1.0 (2016-12-27)**
- Reworked the grid generation by optimizing some variables and tweaking some mixins
- Removed the breakpoint-counting and replaced it with a mixin that checks if it's not zero
- Removed reversing on row items entirely
- Optimized the gulpfile
- More demo fixes, this time a lot

**2.0.6 (2016-12-22)**
- Fixed a typo in the README regarding Yarn

**2.0.5 (2016-12-22)**
- Moved to our own domain, changes reflect this

**2.0.3, 2.0.4 (2016-12-16)**
- Better documentation in `README.md`

**2.0.2 (2016-12-16)**
- Fixed reversing on row items
- Fixed the documentation in the `demo.html` on reversing

**2.0.1 (2016-12-12)**
- Small non-code update.

**2.0.0 (2016-10-10)**
- Renamed column names for better migration
- Added an extra class
- Renamed some mixins, added new ones, added better descriptions on each mixin
- Simplified mixins - they can now do more and have defaults
- Added variables file for better modification
- Added a grid generator for better automation

**1.0.2 (2015-11-29)**
- Added SCSS source and a few small fixes

**1.0.1 (2015-09-27)**
- Removed helper classes

**1.0 (2015-06-23)**
- Initial release

### Classes
Flexgrid now has 5 classes, compared to 4 in v1. You might find these familiar, as these resemble [Bootstrap]:
- xs (xtra small - for mobile devices and small tablets)
- sm (small - for large mobile devices and tablets)
- md (medium - for tablets and very small laptops)
- lg (large - for smaller laptops and -desktops)
- xl (xlarge - for desktops)

The classes can be combined to create more dynamic and flexible layouts.

**Pro tip**: Each class scales up, so if you wish to set the same widths for `sm` and `md`, you only need to specify `sm`.

### .container and .container-fluid
Flexgrid comes with responsive containers that boxes the content in which are controlled by `@media`-queries. These `@media`-queries trigger at the same widths defined by the [Bootstrap]-framework. However, as a small detail, Flexgrid bases its width-triggers on `rem` instead of `px`. This creates a much more fluid layout. While `em` is relative to the `font-size` of its direct or nearest parent, `rem` is only relative to the `html` (root) `font-size`. Flexgrid `font-size` is set to `16px`. There is also a fluid container that has no `@media`-queries.

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

### Columns
Flexgrid comes with columns with percent-based widths allow fluid resizing of columns and rows.

![columns](https://flexgrid.moso.io/img/columns.png)

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

### Offsets
It's fairly easy to offset columns

![offset](https://flexgrid.moso.io/img/offset.png)

```html
<div class="container">
  <div class="row">
    <div class="xs-3 xs-offset-9">.offset-9</div>
    <div class="xs-6 xs-offset-6">.offset-6</div>
    <div class="xs-9 xs-offset-3">.offset-3</div>
  </div>
</div>
```

### Auto width
This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.

![auto](https://flexgrid.moso.io/img/auto.png)

```html
<div class="container">
  <div class="row">
    <div class="md">Auto</div>
    <div class="md">Auto</div>
    <div class="md">Auto</div>
    <div class="md">Streeeeeeetch</div>
    <div class="md">Auto</div>
    <div class="md">Auto</div>
    <div class="md">Auto</div>
  </div>
</div>
```

### Justifying content
##### space-around:
With `space-around`, items are evenly distributed in the line with equal space around them.

![space-around](https://flexgrid.moso.io/img/space-around.png)

```html
<div class="container">
  <div class="row xs-around">
    <div class="xs-12 md-6 lg-2">Around</div>
    <div class="xs-12 md-6 lg-2">Around</div>
    <div class="xs-12 md-6 lg-2">Around</div>
    <div class="xs-12 md-6 lg-2">Around</div>
  </div>
</div>
```

##### space-between:
`space-between` distributes items in the line; first item is on the start line, last item on the end line.

![space-between](https://flexgrid.moso.io/img/space-between.png)

```html
<div class="container">
  <div class="row xs-between">
    <div class="xs-12 md-6 lg-3">Between</div>
    <div class="xs-12 md-6 lg-3">Between</div>
    <div class="xs-12 md-6 lg-3">Between</div>
  </div>
</div>
```

##### start, center, end
- `start`: (default): items are packed toward the start line.
- `center`: tems are centered along the line.
- `end`: items are packed toward to end line.

![justify-start-center-end](https://flexgrid.moso.io/img/justify-start-center-end.png)

```html
<div class="container">
  <div class="row md-start">
    <div class="xs-12 md-3">Start</div>
  </div>
  <div class="row md-center">
    <div class="xs-12 md-3">Center</div>
  </div>
  <div class="row md-end">
    <div class="xs-12 md-3">End</div>
  </div>
</div>
```

##### top, middle, bottom
Vertically aligning items can be a pain. But not with `flexbox`.

![justify-top-middle-bottom](https://flexgrid.moso.io/img/justify-top-middle-bottom.png)

```html
<div class="container">
  <div class="row xs-top">
    <div class="xs-12 md-6">Lorem ipsum ...</div>
    <div class="xs-12 md-6">Top</div>
  </div>
  <div class="row xs-middle">
    <div class="xs-12 md-6">Lorem ipsum ...</div>
    <div class="xs-12 md-6">Middle</div>
  </div>
  <div class="row xs-bottom">
    <div class="xs-12 md-6">Lorem ipsum ...</div>
    <div class="xs-12 md-6">Bottom</div>
  </div>
</div>
```

**Pro tip**: You can combine `<prefix>-center` and `<prefix>-middle` to perfectly center content on a page. No more `display: table;` on the outer and `display: table-cell; vertical-align: middle;` on the inner element, or even `position: absolute; translate: transformX(-50%); top: 50%;` to vertically and horizontally center content. Smart, huh?

### Ordering
By default, items are laid out in the source order. However, the `order`-property controls the order in which they appear in the container.

![ordering](https://flexgrid.moso.io/img/ordering.png)

```html
<div class="container">
  <div class="row">
    <div class="xs-12 md-6 lg-2">1</div>
    <div class="xs-12 md-6 lg-2 xs-last">2</div>
    <div class="xs-12 md-6 lg-2">3</div>
    <div class="xs-12 md-6 lg-2">4</div>
    <div class="xs-12 md-6 lg-2">5</div>
    <div class="xs-12 md-6 lg-2 xs-first">6</div>
  </div>
</div>
```

### Reversing
Reversing is basically the same as `direction: rtl`, just smarter. You no longer have to reverse the `direction` inside the item for text to align properly.

![ordering-reverse](https://flexgrid.moso.io/img/ordering-reverse.png)

```html
<div class="container">
  <div class="row reverse">
    <div class="xs-12 md-6 lg-2">1</div>
    <div class="xs-12 md-6 lg-2">2</div>
    <div class="xs-12 md-6 lg-2">3</div>
    <div class="xs-12 md-6 lg-2">4</div>
    <div class="xs-12 md-6 lg-2">5</div>
    <div class="xs-12 md-6 lg-2">6</div>
  </div>
</div>
```

#### Demonstration of all these can be found via the demo link!

### Editing the source
It's easy to modify the source. Clone this repository and edit away.
Flexgrid comes with [webpack] in form of [Laravel Mix] that can compile the source for you. To install its dependencies, you need to have **NodeJS** and `npm` installed.
To install the dependencies, you just run:
```
npm install
```

When you're done editing, you just run:
```
npm run compile
```
This will compile a regular `.css`-file, and a minified `.min.css`-file.

[webpack]:https://webpackjs.org
[Laravel Mix]:https://github.com/JeffreyWay/laravel-mix
[here]:http://caniuse.com/#search=flexbox
[DEMO]:https://flexgrid.co
[Bootstrap]:http://getbootstrap.com
