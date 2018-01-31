# Useful Conventions
Based on extensive testing we've created these rules to help you optimize the workflow.

## Always name blocks
This is better
```views
Button Vetrical
onClick props.buy
Label Text
text Buy Now!
```
Than this
```views
Vetrical
onClick props.buy
Text
text Buy Now!
```

## Extract blocks as view files
This is better
```views
Button
onClick props.buy
```
Than this
```views
Button Vetrical
onClick props.buy
Label Text
text Buy Now!
```
Where `Button` is a `Button.view` file
```views
Button Vetrical
onClick props
Label Text
text Buy Now!
```

## Don’t name props unless you absolutely have to
This is better
```views
Label Text
text props
```
Than this
```views
Label Text
text props.label
```
If you avoid naming props, you can use the properties by the same name at the point of use
```views
Label
text Buy Now!
```
Otherwise, you would have to remember what is the custom name of the prop
```views
Label
label Buy Now!
```

## Keep props simple
This is better
```views
Label Text
onWhen props.isVisible
text Buy Now!
```
Than this
```views
Label Text
onWhen props.isOne && props.isTwo || props.isThree
text Buy Now!
```
Manage these in the logic file and expose simple prop back to the view like the
one above `props.isVisible`

Complex props are easier for designers to reason about and they can be editable
in the Views Tools.

## Don't repeat blocks, use lists
This is better
```views
Books List
from props
Book
```
Than this
```views
Book

Book

Book

Book
```
In design tools, we tend to duplicate elements in the layout to represent the lists.
In production, we use lists with data passed dynamically from props.

## Design System folders
## Sensible Duplication
## For readability, put the onWhen property as a first line below the block's name
