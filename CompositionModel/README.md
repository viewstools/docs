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

### Content

1. Capture block lets you capture user input as data.
2. Image block displays graphic files, like JPGs, PNGs, GIFFs, and more
3. Text block renders text in the view.
4. SVG block renders vector graphics.
![Content blocks](CompositionModel/containersFinal.jpg)

[More on content blocks](Blocks/README.md)
