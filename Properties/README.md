# Use properties to style blocks

Properties define the style and type of all Blocks used in a view.

There are two kinds of properties:

* _Internal_: value is defined in the same .view file.
  Example: `text Buy Now`, `color red`
* _External_: value comes from somewhere else (.view.logic.js, service, back-end).
  Example: `text <`, `text <label`

## Internal properties

Views styling properties are based on regular CSS to lower the learning curve
for front end developers.

### Flexbox

Flexbox is a part of CSS standards. We use flexbox to manage layout composition
of blocks, specifically, we use it to control:

1.  Sizing
2.  Alignment
3.  Distribution

[If you're curious about you can read more about flexbox here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

See the [quirks](../QUIRKS.md) for a few cases in which we've spotted flex wasn't
cutting it for us.

Every block, by default, has `display flex` property enabled.
Horizontals have `flexDirection` set to `row`, and Verticals to `column`.

### All supported properties

[Go to the list of all properties](AllStylingProperties.md)

## External properties, also called Slots

Say, you want to change the label of a button dynamically depending on the View
where the button is being used?
To achieve that, add `<` before the value, like here `text < value`

Here's an example of how to turn a Internal property `text` from `Buy Now` to an External
property as a dynamic value, managed through `slots`.

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
text < Buy Now
fontSize 20
color #f7941e
```

Let's call that view `Label.view` and save it in the project folder.
When you use it in another view, pass any other value using the same name of the
property:

```views
Label
text Get New!!!
```

Otherwise, if you just use `Label` view the default value will be used, so using:

```views
Label
```

will result in showing `Text` block with `Buy Now` value in your final build.

You can also keep passing it too as a different slot, but it's usually not advised
to give slots custom names:

```views
Text
text <label Buy Now
fontSize 20
color #f7941e
```

The reason why we don't advise to use custom slot names is because you will have to
remember what you called it, and that introduces unnecessary complexity:

```views
Label
label Buy Now
```

Reach out with questions via our [Slack Questions Channel](https://slack.views.tools/).
Mention `@tom` or `@dario` to make sure that we get your notifications.
