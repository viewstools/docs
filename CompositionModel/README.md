# Views Composition Model

## Atomic Design

Views uses [Atomic Design Composition Pattern](http://patternlab.io/) to ensure
interface consistency across all views.

![What is Atomic Design Pattern?](images/atomic-design.jpg)

Views composition model is a collection of embeddable blocks.

![Composition model1 - embeddable](images/BlocksComposition1.jpg)

Every `.view` file is a self contained component with a top level container block and content blocks.
As a component it can be used inside of any other `.view` file and styled at point of use.

![Composition model2 - point of use](images/BlocksComposition2.jpg)

The power of the atomized composition model allows components to become reusable templates as the
app's functionality and the design system grows.

We use [Yoga layout engine](https://github.com/facebook/yoga)

## Containers and content blocks

Containers wrap other blocks, displace, and align them.
![Containers and Content](CompositionModel/containerscontent.jpg)

### Containers

1. Horizontal distributes blocks inside next to each other.
2. Vertical distributes blocks inside on top of each other.
3. List repeats one block based on the amount of passed data.
![Containers wire-frame](CompositionModel/containers.jpg)

Examples of final interface
![Containers final interface representation](CompositionModel/containersFinal.jpg)

[More on containers](Blocks/README.md)

### Content blocks

1. Capture block lets you capture user input as data.
2. Image block displays graphic files, like JPGs, PNGs, GIFFs, and more
3. Text block renders text in the view.
4. SVG block renders vector graphics.
![Content blocks](CompositionModel/containersFinal.jpg)

[Examples of basic blocks](Blocks/README.md)

## Composer (when you use Views Tools)



## Proximity nesting (when you use code editor)

Proximity nesting is how we do composition inside a view. You can think about your
view as a stack of blocks where new lines set blocks apart.

```
Top Vertical
InsideTop Vertical
Text
```
In the example above, the hierarchy is:
* `Top`
  * `InsideTop`
    * `Text`

What if we want to have the text at the same level of `InsideTop`? Our code
would look like:

```
Top Vertical
InsideTop Vertical

Text
```

Our hierarchy now looks like:
* `Top`
  * `InsideTop`
  * `Text`
That new line before `Text` separates it from `InsideTop`.

This is a rule that applies to almost all blocks except the following content
blocks: `Image`, `Text`, `CaptureEmail`, `CaptureFile`, `CaptureNumber`, `CapturePhone`,
`CaptureSecure`, `CaptureText`, `CaptureTextArea`, `Proxy`, `SvgCircle`, `SvgEllipse`, `SvgLine`,
`SvgPath`, `SvgPolygon`, `SvgPolyline`, `SvgRect`, `SvgText`, `SvgStop`.

With that in mind, if we want to have two `Text`s next to each other, we don't
need a new line between them. The following code:
```
Top Vertical
Text
Text
```

Gives us the hierarchy we're after:
* `Top`
  * `Text`
  * `Text`

A view can only have one top level block. If you have more than one, only the
first one will be displayed. E.g.:

```
Top Vertical
Text

Text
```
In the example above, the second `Text` is outside of the top level container
therefore it won't be displayed.
