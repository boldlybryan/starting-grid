## About the Starting Grid
The Starting Grid is a CSS layout library based on the CSS Grid spec. It uses a very, very small subset of Grid features to provide responsve layouts. With just two classes on a parent container, you can lay out child elements into typical grid-style layouts. Beyond that, there's no extra markup to muck up your HTML.

## Install me
1. Clone this repository
2. `npm install`
3. `gulp` to compile scss to css, then `gulp watch` to run task automagically.

Alternatively, there is a pre-release version of starting grid on jsdelivr. Include the following link to use starting grid:
```https://cdn.jsdelivr.net/gh/brykng/starting-grid@v0.1.2/dist/css/starting-grid.css```

## Roadmap
* Uneven column splits (ex. 2 column, 60/40 layout)
* Responsive column classes
* more options for max container widths

## Ways to handle unequal grid columns
Example - What is the best way (in terms of markup + class names) to specifiy that I want a 2-column grid, where the left-hand column is 40% of the grid width and the right column is the remaining 60%

### Option 1 - Specify column widths on the grid container
Example - grid container class list looks something like this:

```
<div class="grid two-col forty-sixty">
  <div>40% column</div>
  <div>60% column</div>
</div>
```

This is incredible because unlike other grid systems out there, you wouldn't have to specify anything on grid child elements. Every immediate child of the container would receive the treatment set on the grid. It could be literally any element. If you need to change the grid settings, you only have to modify a couple of class names and you're done, instead of going to each element to make the change.

A downside to this approach is that there woild be a ton of different classes for this. Multiply this by a few breakpoints and thats a ton of classes. This is because everything has an inverse (forty-sixty and sixty forty). Gets even bigger as we add more columns (3 column layout like twentyfive-fifty-twentyfive). At this point, would it make sense for these to be numbers with a alpha prefix (something like c-25-50-25).

### Option 2 - Specify column widths INSIDE the grid container
Example:

```
<div class="grid two-col">
  <div class="col-40">40% column</div>
  <div class="col-60">60% column</div>
</div>
```

This would be a bit trickier on the CSS side. These would have to use the `grid-column` property, which is just shorthand for defining `grid-column-start` and `grid-column-end`. That works by specifying where we'd want `col-40` to start (in the example above it'd be one, but what would a sixty-forty layout look like?) and then specifying how many columns to span. Technically, the grid container would have to be specified as a 5-column grid, because it would take 2 of the 5 to make a forty percent column

Now that I've thought that last piece out, this way is obviously not feasible for a framework like this.

