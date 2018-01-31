# Scope properties

Setting one or multiple conditions on a block will define the way it will render.
There are two ways you can take advantage of the scopes on any given block:
1. To control how a block looks like when rendered in the view
2. To show or hide a block from the view

Scopes are defined in the logic files, back-end, or via service call.
Each scope depends on the value passed to respective prop.

General syntax rules:
1. `when` the `props.conditionName` is true, display
2. `!props.conditionName` is a negation of the value passed to the prop
3. There is a base scope which includes all the properties of the block without
leading `when` statement.
4. Properties included in each scope have to also be used in the base scope
with a default value.

## Control properties of blocks dynamically
Blocks and Views can have many scopes driven by `when` statements.
Basic example:
```views
Button Vertical
backgroundColor white
onClick props
when props.isClicked
backgroundColor green
Label Text
color black
text Click me
when props.isClicked
color white
text I was clicked
```
This comes handy when you want to change a block on interaction, or when you
want to animate transitions.

There is a specific structure to a block with `when` properties.

Styling properties positioned directly below the name, and type, of a block become the
base style. They can be changed based on passed props conditions. From the example above:
`when props.isClicked` is a condition added to the Button wrapping the Text block.
Above this `when` condition, and as a part of base style, you can position any
styling properties, we use `backgroundColor white`.

Below the `when` condition you can overwrite the conditions from the base styles.
We change background color of the button to `green` using `backgroundColor green`.

There can be any number of the `when` conditions within the block you need.
After adding properties below each `when`, remember to add it also to the base
style with a default value.

`when` conditions can be triggered on any basic blocks and custom views.
The `when` property doesn't have to be passed down to the custom view manually.
It will apply automatically. So, this is also valid even tho Title view doesn't
have the `when props.when` specified anywhere within the view.

```views
Button Vertical
backgroundColor white
onClick props
when props.isClicked
backgroundColor green
Label Text
color black
text Click me
when props.isClicked
color white
text I was clicked
SubTitle
marginTop 5
text Go for it!
when props.isClicked
text Nicely done!


FakeProps
isClicked false
when user clicks the button
isClicked true
```
The `SubTitle` view is saved as `SubTitle.view` file and contains on `Text` block
with `text` defined as external prop.
```views
SubTitle Text
marginTop props
color #ffaa00
fontFamily Montserrat
fontSize 16
text props
```
As you see, there is no `when` props in the `Subtitle` view but the `text` values
are changing based on the `isClicked` condition specified in `FakeProps` of `Button.view` file.
Here's how we pass the temporary test mock data to the Button using tests:

Here's the visual result of the conditions above :
![when conditions - ugly](whens-ugly.png)

## Control when blocks are rendered/shown

You can use `onWhen` condition as part of the base scope to act as a rendering
switch, and show or hide the block.

```views
Popup Text
text Yoohoo!
onWhen props.goesYoohoo
```
At this point `props.goesYoohoo` expects a boolean value and can be set
as true or false in the Props block. An example would look like:
```
FakeProps
when Popup is visible
goesYoohoo true
when Popup is not visible
goesYoohoo false
```
If you use Views Tools you will see two artboards in the preview with Popup block
shown in the first one and not visible in the second.

The Popup will be rendered in the view of the final production build based on the
value of the `props.goesYoohoo` passed from the `Popup.view.logic.js` file, from
the back-end, or via an API call. By default the Popup will not render.

## Javascript ternaries are no longer supported
With the simplification of `when` conditions, ternaries like:
`text props.isClicked ? 'Nicely done!' : 'Go for it!'`
are no longer supported.

Read more about this point in our [Useful Conventions](Conventions/README.md) section.

## FakeProps

Properties used in the `FakeProps` block give you access to pass temporary data
to the external properties (props) defined in the current view file.

FakeProps only work in Views Tools to pass the data to the dynamic props.
They are fake and will be discarded at the point of running your React project.

In this simple example, `text` value is an internal property with hardcoded value:
```views
Text
text Joe Summers
```
To make `text` value dynamic we need to turn it into a prop, like this:
```views
Text
text props
```
or a custom prop, like this:
```views
Text
text props.username
```

At this point the Text block with disappear from the preview because the value
for the `text` property is exposed as an external connection, but there is no
value passed to it yet.

After adding `FakeProps` block at the end of the view (when you use code editor) or
filling the value in the props popup (when you use Tools), the text value will be
passed to the Text block.
```
FakeProps
text Joe Summers
```

If you use Views Tools, and see the value in the preview, but cannot see it
in the final build, it could mean couple of things:
- You are not passing the props down the nesting tree. Solution: Trace the nesting path
from the point of use down to the view that doesn't render. Make sure connections
are made on every level. Check the naming and spelling.
- The prop is not receiving the value from the state. Solution: Add the prop with
the same name in the logic file.
- The prop is visible but it has a wrong value. Solution: Check the conditions
set by `when` properties.

To avoid errors, make sure your fake props comply with these simple rules:
1. Always start the scope name with a `when`
2. The name of the scope can have spaces, but not special characters like dashes or parenthesis.


Reach out with questions via our [Slack Questions Channel](https://slack.viewsdx.com/).
Mention `@views-tom` or `@dario` to make sure that we get your notifications.
