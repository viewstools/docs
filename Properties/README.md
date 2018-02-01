# Use properties to style blocks
Properties define the style and type of all Blocks used in a view.

There are two kinds of properties:
- _Internal_: value is defined in the same .view file.
Example: `text Buy Now`, `color red`
- _External_: value comes from somewhere else (FakeProps, service, back-end).
Example: `text props`

## Internal properties
Views styling properties are based on regular CSS to lower the learning curve
for front end developers.

### Flexbox
Flexbox is a part of CSS standards. We use flexbox to manage layout composition
of blocks, specifically, we use it to control:
1. Sizing
2. Alignment
3. Distribution

[If you're curious about you can read more about flexbox here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

See the [quirks](../QUIRKS.md) for a few cases in which we've spotted flex wasn't
cutting it for us.

Every block, by default, has `display flex` property enabled.
Horizontals have `flexDirection` set to `row`, and Verticals to `column`.

### All supported properties
[Go to the list of all properties](AllStylingProperties.md)

## External properties
Say, you want to change the label of a button dynamically depending on the View
where the button is being used?
1. Replace the value you want to make dynamic with `props`, or `props.anyName`
2. Pass the value in FakeProps block and point of use, like `anyName value`

Here's an example of how to turn a Internal property `text` from `Buy Now` to an External
property as a dynamic value, received through `props`.

**before**:
```views
Text
text Buy Now
fontSize 20
color #f7941e
```

**after**:
```views
Text
text props
fontSize 20
color #f7941e
```

After changing a value to a dynamic prop it will disappear from the preview.
To bring the text back you need to add `text Buy Now` to the `FakeProps` block,
 like this:
```
FakeProps
text Buy Now
```

Let's call that view `Label.view` and save it in the project folder.
When you use it in another view, pass any value using the same name of the
property:
```
Label
text Buy Now
```

You can keep passing it too:
```
Label
text props
```

Even as a property with a custom name:
```
Label
text props.label
```

Then, on the higher level of nesting, pass `label` property:
```
Label
label Buy Now
```


Reach out with questions via our [Slack Questions Channel](https://slack.viewsdx.com/).
Mention `@views-tom` or `@dario` to make sure that we get your notifications.
