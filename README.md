# Flexgrid - a simple grid based on flexbox layout

No more floats! If a regular grid layout such as my own [K-grid] is based on both block and inline flow directions, the flexbox (or just flex) layout is based on "flex-flow directions". Thus `float` and `clear` have no effect. Using `float` causes the `display`-property to compute to `block`. Using `flexbox` also means less JavaScript! And as per K-grid standard, everything is responsive and stacks perfectly.

**Please note:** flexbox is only partially supported by IE10. Any IE-version lower than 10 does not support flexbox. More info [here].

### Demo
A live demo is available here: [DEMO]

### Changelog
**1.0 (2015-06-23)**
- Initial release

### Classes
Like K-grid (and initially [Bootstrap] which K-grid is partially based on), Flexgrid has 4 classes:
- s (small - for mobile devices and smaller tablets)
- m (medium - for tablets and very small laptops)
- l (large - for smaller laptops and -desktops)
- xl (xlarge - for desktops)

The classes can be combined to create more dynamic and flexible layouts.

**Pro tip**: Each class scales up, so if you wish to set the same widths for 's' and 'm', you only need to specify 's'.

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

[K-grid]:https://mdevdk.github.com/k-grid
[here]:http://caniuse.com/#search=flexbox
[DEMO]:http://flexgrid.moso.io
[Bootstrap]:http://getbootstrap.com
