# Flexgrid - a simple grid based on flexbox layout

[![Build Status](https://travis-ci.org/moso/flexgrid.svg?branch=v2.0.0)](https://travis-ci.org/moso/flexgrid)

No more floats! Regular grid layout is based on both block and inline flow directions, however, the flexbox (or just flex) layout is based on "flex-flow directions". Thus `float` and `clear` have no effect. Using `float` causes the `display`-property to compute to `block`. Using `flexbox` also means less JavaScript! Everything is, of course, responsive and stacks perfectly.

**Please note:** Flexbox is only partially supported by IE10. Any IE-version lower than 10 does not support flexbox. However, Flexgrid has many fallbacks included, so IE11 is safe. More info [here].

Flexgrid is an integral part of the upcoming [Nano Framework](https://github.com/getnano/nano-framework), where Flexgrid is the standard grid-system and provides a stable flexbox skeleton.

### Demo
A live demo is available here: [DEMO]

### Changelog
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

**Pro tip**: Each class scales up, so if you wish to set the same widths for 'sm' and 'md', you only need to specify 'sm'.

### .container and .container-fluid
Flexgrid comes with responsive containers that boxes the content in which are controlled by `@media`-queries. These `@media`-queries trigger at the same widths defined by the [Bootstrap]-framework. However, as a small detail, Flexgrid bases its width-triggers on `rem` instead of `px`. This creates a much more fluid layout. While `em` is relative to the `font-size` of its direct or nearest parent, `rem` is only relative to the `html` (root) `font-size`. Flexgrid `font-size` is set to `16px`. There is also a fluid container that has no `@media`-queries.

### Columns
Flexgrid comes with columns with percent-based widths allow fluid resizing of columns and rows.

### Offsets
It's fairly easy to offset columns

### Auto width
This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.

### Justifying content
##### space-around:
With `space-around`, items are evenly distributed in the line with equal space around them.
##### space-between:
`space-between` distributes items in the line; first item is on the start line, last item on the end line.
##### start, end, center
- `start`: (default): items are packed toward the start line.
- `center`: tems are centered along the line.
- `end`: items are packed toward to end line.

##### top, middle, bottom
Vertically aligning items can be a pain. But not with `flexbox`.

### Ordering
By default, items are laid out in the source order. However, the `order`-property controls the order in which they appear in the container.

### Reversing
Reversing is basically the same as `direction: rtl`, just smarter. You no longer have to reverse the `direction` inside the item for text to align properly.

#### Demonstration of all these can be found via the demo link!

### Editing the source
It's easy to modify the source. Clone this repository or download the release, and edit away.
Flexgrid comes with a `gulpfile` that can compile the source for you. To install its dependencies, you need to have **NodeJS** and `npm` installed.
To install the gulp dependencies, you just run:
```
npm install
```

When you're done editing, you just run:
```
gulp scss
```
If you want to minify the CSS, you can run:
```
gulp css-ugly
```

[here]:http://caniuse.com/#search=flexbox
[DEMO]:http://flexgrid.moso.io
[Bootstrap]:http://getbootstrap.com
