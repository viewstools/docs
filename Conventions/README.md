# Useful Conventions

Based on extensive testing we've created these rules to help you optimize the workflow.

## Always name blocks

This is better

```views
Button Vertical
  onClick <buy
  Label Text
    text Buy Now!
```

Than this

```views
Vertical
  onClick <buy
  Text
    text Buy Now!
```

## Extract blocks as view files to keep the composition simple

This is better

```views
Button
  onClick <buy
```

Than this

```views
Button Vertical
  onClick <buy
  Label Text
    text Buy Now!
```

Where `Button` is a `Button.view` file

```views
Button Vertical
  onClick <
  Label Text
    text Buy Now!
```

## Don’t name slots unless you absolutely have to

This is better

```views
Label Text
  text < Buy Now
```

Than this

```views
Label Text
  text <label
```

If you avoid naming slots, you can use the properties by the same name at the point of use

```views
Label
  text Buy Now!
```

Otherwise, you would have to remember what is the custom name of the slot

```views
Label
  label Buy Now!
```

## Keep slots simple

This is better

```views
Label Text
onWhen <isVisible
  text Buy Now!
```

Than this

```views
Label Text
onWhen <button.isVisible
text Buy Now!
```

Manage these in the logic file and expose simple slot back to the view like the
one above `<isVisible`

Simple slots are easier for designers to reason about and they are editable
in the Views Tools.

## Don't repeat blocks, use lists

This is better

```views
Books List
  from <
  Book
```

Than this

```views
Vertical
  Book
  Book
  Book
  Book
```

In design tools, we tend to duplicate elements in the layout to represent the lists.
In production, we use lists with data passed dynamically from external data.

## Design System folders

Any folders you create inside of the `src` in your project will be recognized by
Views Tools and displayed on the side nav.

Here's the example structure that usually works for modern applications, but you
can organize your project the way fits your needs:

```
Buttons
Captures
Cards
Custom
Icons
Images
Lists
Main
Text
Navigation
```

![Folders in Views Tools](FoldersSample.png)
Any .view files saved in the main `src` folder will be shown in `Ungrouped` folder
in Views Tools.

If you use `Main` folder to keep the top level views of your application, it will be
a default folder in Views Tools, making it easy to explore the layouts to designers.

## For readability, put the onWhen property as a first line below the block's name

We also recommend you put it at the same level that the block is defined at, so
they can be folded together.

This reads better in Views Tools and in code

```views
Label Text
onWhen <isVisible
  color green
  fontSize 14
```

Than this

```views
Label Text
  color green
  fontSize 14
  onWhen <isVisible
```

Reach out with questions via our [Slack Questions Channel](https://slack.views.tools/).
Mention `@tom` or `@dario` to make sure that we get your notifications.
