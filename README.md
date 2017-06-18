# Views Docs - Productive way of creating interfaces

## How can you benefit from what we are doing?
👋 We want the same as you do: write clean, simple, meaningful, and accessible code.
And to be productive at it! Or at least we hope that is what you want...

We've proofed, that if you give access to production code for non-technical members
of your team, like designers or business analysts, the team will become more
cross-functional and productive in a very short time.

Since programming is hard for those who don't do it, we devote all our efforts
to make the Views learning curve as small as possible, syntax as beautiful as it
gets, and as powerful as possible. [Check out new animations](## animations)

TODO Put the final index here

## Is someone else using it successfully?
Yes! 🚀 We currently have a strategic partner using Views to deliver their core
application to their 50 million users in the USA. We're gathering numbers and
drafting a story that should help you understand what it meant for them to adopt
Views in practical terms.

Of course, we use it to build things too. The docs app in this repo is an example
of it. We'll be open sourcing more apps soon to showcase different uses of Views.

## What is Views, exactly?
Views is a simplified front-end language to describe user interfaces (UI) and
their interactions (UX).

Views compiles to production quality Javascript.

Does this mean that Views replaces tools like Illustrator, InVision, Sketch or
the good old pen and paper? Only for those who want their interfaces to become
functional and fully interactive during the design process.

In our experience, the sooner we get a fully functional application in front of
real users the better is the quality of testing data.

## Views is a knowledge transfer platform!
The value of cross-functional teams is very well known to Growth Hacking community
and it's explained well in this book [Hacking Growth: Fastest Growing Companies Breakout](https://www.amazon.com/Hacking-Growth-Fastest-Growing-Companies-Breakout/dp/045149721X)

![Cover of the mentioned book](images/growthhackingsmall.jpg)

TODO Visually list the skills that cross-functional team member acquires in the process

Views helps build fast experiments that can be expanded to fully featured products
and don't end up thrown away after testing, like it's in a case of prototypes.

Every team that introduced non-technical members using Views on an early stage of
product development noticed massive spikes in productivity, motivation, and cross-domain
knowledge transfer.

_We learn the best from each other and on the job_

Because Views syntax, composition, state and logic concepts are much easier to
grasp than in a typical HTML, CSS, JS stack, non-technical team members have fewer
barriers to start writing code.

_We think that the code we write should be beautiful, meaningful, and simple_

As a collaboration platform Views removes silos and brings down the walls between
development and the rest of the organization.

_We cherish openness, learning, and frequent shipping_

To learn more and share your thoughts go to our Medium publication [Learn ViewsDX](https://learn.viewsdx.com/) or join our [Slack Community](slack.viewsdx.com)


## Using Views in your project
For now, Views morphs to the web and desktop through React DOM and to iOS and
Android through React Native.

Feel free to reach out if you want to learn how to make your own morpher to, say
Angular, Vue, etc. 👌

### with create-react-app
```
yarn add views-morph
views-morph src --watch --as react-dom
```

### with create-react-native-app
```
yarn add views-morph
views-morph . --watch --as react-native
```
### with an existing project
```
yarn add views-morph
views-morph . --watch --as react-dom
```

You will want to add this to your `.gitignore` file:
```
# views
**/*.data.js
**/*.view.js
**/*.view.css
**/*.view.tests.js
```
### in a sample project

[Here's a video with the most recent overview of sample project installation and use](https://learn.viewsdx.com/june-2017-overview-update-5843a2142308).

# Composition model

Views uses [Atomic Design Composition Pattern](http://patternlab.io/) to ensure
interface consistency across all views.

![what is Atomic Design Pattern?](images/atomic-design.jpg)

Our "Atomized" composition model looks like this:
1. Properties - the atoms
2. States - groups of properties related to functionality of a Block
3. Blocks - groups of States
4. Views - groups of Blocks saved in a .view file
5. Smart Views - Views grouped with Javascript logic, super powerful stuff ⚡️ 🔥 💥 ☄️

![How Atomic maps to Views?](images/mapping-atomic-to-views3.jpg)


## Properties
Everything that matters in Views is a prop!

Properties define the style and type of all States, Blocks and Views.

There are two kinds of properties:
- Internal - value is defined in the same .view file - Example: `text Button Label`
- External - value comes from somewhere else (.data file, .view.tests file, service,
  back-end) - Example: `text props.buttonLabel`

Say, you want to change the Button's Label dynamically depending on the View
where the button is being used in?
1. Replace value you want to turn into dynamic with `props.anyName`
2. Pass the value in Tests or at the point of use with `anyName Value`

BEFORE replacing the Label value with dynamic value:
```views
Text
text Button Label
fontSize 20
color #f7941e
```

AFTER replacing making the value dynamic:
```views
Text
text props.buttonLabel
fontSize 20
color #f7941e
```

At that point you have two choices for setting the value, and it depends on if it the value
for the label is set by you or by the user of your app:
- Let buttonLabel to remain an external prop and provide it in .view.tests to see
rendered result during your design process
- Set value of buttonLabel at the point of use, directly below UI Variable name.

Here's how you set it up on the point of use:
```views
Filename
buttonLabel Buy Now!
```

TODO explain toggles `onClick toggle props.stuff`
TODO Introduce Alfa Release of Animations

## States

TODO Implement States, as shown at the end of this brainstorming session:

[Rethinking States in Views](https://www.youtube.com/watch?v=dsaAF7cX5xc)

## Blocks

A `Hello World` example in Views may look like:
```views
Text
text Hello World
```

A block is defined by its type. In the example above we use `Text` type of block
to render text in the view.

Additionally, a block can have a name:
```views
Greeting is Text
text Hello World
```
It's a good DX([Designer-Developer Experience](https://learndx.com/)) practice
to name your blocks. It helps others to understand and find them faster. This is
also a super handy pattern for QA team, which can now access the elements using
data attributes.

💩 The type is required and it's always specified by pattern `Name is BlockType`

[Here's, around minute 52, Tom explains how to save blocks as a view and use it in another view)](https://youtu.be/S-5rbcnXWtI?t=51m38s)


### BlockType
In Views, we distinguish three types of blocks: Containers, Content and
Custom blocks.

TODO Visualize this section with a box, stuff, and custom stuff

*Container* blocks let you group blocks together. They are:
* `Vertical`
* `Horizontal`
* `List`

TODO Visualize what is happening in Verticals,Horizontals, and Lists

`Vertical` and `Horizontal` let you lay blocks out. `Vertical` will stack any
blocks inside of it one below the other and `Horizontal` will get them side by
side.

Views uses a thing call Flexible Box, or flexbox, to lay out your blocks in the
UI. It's a layout mode intended to accommodate different screen sizes and
different display devices without much effort.
Tom wrote a great post a while back explaining our approach at a simplified
flexbox, [check it out here](https://learn.viewsdx.com/simplified-flexbox-for-designers-7adc79aebf55).
[If you're curious about you can read more about flexbox here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes).

In CSS terms, `Vertical` is a shortcut for `flex-direction: row`

If you've been doing Web development for a while, you might be wondering why
we chose it over the default block mode of that CSS has. The main reasons are
that it's more predictable, meaning it's easier to use for newcomers than
display block, and also that it works across platforms thanks to Facebook's
[Yoga layout engine](https://github.com/facebook/yoga).

By the way, that doesn't mean that you can't use other `display` values. See
the [quirks](QUIRKS.md) for a few cases in which we've spotted flex wasn't
cutting it for us.

`Vertical` and `Horizontal` are also actionable blocks, which is a fancy way to
say that they take click or press events. That's how you make buttons for
example.

```views
Button is Vertical
onClick props.doSomeAction
Text
text click me
```


`List` lets you repeat one item many times.
It needs one prop, called `from`. A `List` can only take one block inside of it,
so if you want more complex things, like a card, you will want to use a
container block like a `Vertical` or a `Horizontal`.

Inside a `List` you get access to an `item` and `index`. `item` has whatever your
list has and `index` tells the position of the item in the list starting at 0.

```views
List
from props.people
Text
text item.name
```

*Content* blocks let you, well, show stuff. You met one before, `Text`, let's
meet all of them:
* `Text`
* `Image`
* `Svg`
* `Capture`

`Text` is probably the block you'll use the most. Its most important prop is,
wait for it... are you ready?!? 👉 `text`. 😱. Yeah, I know, you saw that one
coming... Sure.
A `Text` block can take almost any CSS, more importantly it takes font styles,
like `fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`,
etc. And colours. Oh yeah, `deepskyblue` and `deeppink`. Now we're talking.
For the Irish, British and Australians in the world, remember that the prop is
`color` and not `colour`. 🤐.

We all know everyone loves web fonts. You can use those here too. Yeah, Google
fonts, Typekit, even that piece of art you have sitting in that custom woff file
in your computer would work. However, if you're using web fonts, please please
please, use `fontWeight` too. You see, we're doing some smart stuff there to
ease font loading and you're better off being specific so we don't have to load
stuff unnecessarily and make your app slower. Remember that the more fonts you
use, the more it will take for your app to load, so use them with caution. 🤓.

Sorry for the unsolicited lecture 🙄, here's an example of how to use it:
```views
Text
fontFamily Roboto, sans-serif
fontWeight 300
text nananana nananana nananana Batmannnn!!!!!!! 🍀
```

`Image` takes a `source` prop, it can be a URL or a local file. TODO

`Capture` TODO
`CaptureEmail`
`CaptureFile`
`CaptureInput`
`CaptureNumber`
`CapturePhone`
`CaptureSecure`
`CaptureText`


_SVGs are amazing_. They let you do amazing graphics that scale like crazy.
Of course you can use an `Image` block to just show an SVG file as an image
but if you want to do more crazy stuff with them, like animating parts of it
or changing how it looks like on the fly, you're better off using an `Svg`
block. Inside it, you can use a these specific blocks:

* `Circle`
* `Ellipse`
* `G`
* `LinearGradient`
* `RadialGradient`
* `Line`
* `Path`
* `Polygon`
* `Polyline`
* `Rect`
* `Symbol`
* `SvgText`
* `Use`
* `Defs`
* `Stop`

While you can make an `Svg` by hand, like:
```
Svg
viewBox 0 0 20 20
width 20
height 20
Circle
cx 10
cy 10
r 5
stroke deepskyblue
```

It's certainly more fun that have that done automatically for you 😇. You can
run `views-morph file.svg` and 💥! You'll get a ready to go Views Svg!

[Here's a little video on how you can use it in your project today](https://learn.viewsdx.com/from-svg-to-view-in-1-2-3-79cf8d771485).

`Capture` TODO


### Proximity nesting
[See this bit of this video for now](https://www.youtube.com/watch?v=S-5rbcnXWtI&feature=youtu.be&t=37m54s)

## States

### Contract between .view and view.tests files



### .view.tests
✨
We all want our UIs to be tested. It's hard to do that though. UI in particular
changes often and it's a bit painful to keep your tests updated at all times.

We want to help make testing easier, and we've done that in Views through a
practical application. Right now, our tests help you design your
Views at different stages. Soon enough, they will automatically create unit
tests for your views to ensure that any future changes are being consciously
applied and that unwanted regressions are caught in time.

It works like this. Say we have a View that shows a list of people:
```views
People is Vertical
List
from props.people
Text
text item.name
```
TODO

## View
### Easy in, Easy out
There is no View without .view file.

Each saved View will be morphed (compiled) to production quality Javascript and
saved as .view.js file.

If on some point you decide you don't need ViewsDX anymore you can always use
generated components .view.js files in another Javascript environment.

### Variable === embedded View
Each View filename can be used as an variable from within another View.
That way, Views can be embedded in other Views as parts by injecting content of
the mentioned View.
![Views can be embedded in ](images/embedingViews.jpg)

For example, say you want to choose different font size for one of your app's button.
You will want to change it in one place instead of in every place of use.
1. Extract the button code to separate .view file and save it as file
starting with a capital letter
2. Replace the previous button code with only the name of the extracted View
3. From now `Filename.view` is the value of the variable and when you make a
style change in it you will see it being updated across your app, in every View
that will be going to use it.

This is a simple View with one Text Block BEFORE using it custom variable:
```views
Text
text Button Label
fontSize 20
color #f7941e
```

And here's how it should look like AFTER turning Text Block into a custom variable/part:
```views
Filename
```

Calling Variables by the `Filename` requires the `Filename.view` in src
folder with the extracted code. In the example above, `Filename.view` should have:

```views
Text
text Button Label
fontSize 20
color #f7941e
```

Parts/Variables are capable of storing Properties, States, and Blocks, and even
another Views or Smart Views.

Since any existing .view is a variable anyone can create, manage, and delete files.
It makes the composition pattern accessible to designers and non-technical team members.

## .view.logic === Smart View
Any View file can be also wrapped with Javascript logic to make a Smart View.
TODO Example

## .data
TODO 💾

## animations
TODO

## states/better ternaries :)
TODO

## routes and teleports
TODO
```
App is Vertical

Home is Vertical
at /
Text
text main
Vertical
teleportTo page
Text
text go to page


Page is Vertical
at /page
Text
text some page

Vertical
teleportTo ..
Text
text back
```

## Views and your React components
TODO

## Syntax highlighting
We’ve created the following packages to help you understand `.view` files better:
* [VIM](https://github.com/viewsdx/syntax-vim),
* [Atom](http://atom.io/packages/language-views), and
* [Sublime](https://github.com/viewsdx/syntax-sublime).

We currently highlight block names, margins, paddings, code, and property values. Our highlighters
aren’t perfect, but they should get us started. Feel free to submit fixes and suggestions!

If you’re using other editors and come up with a syntax highlighter for it, reach out,
and we’ll add it to this list.

Happy editing!

## I ran views-morph on my project, and it created a bunch of other files, what's going on?
Say you have a View called `My.view`. When morphing it, Views will create a file
called `My.view.js`. If you're morphing to `react-dom`, it will also create a
`My.view.css` that gets automatically imported. You can avoid that external CSS
file altogether by running the morpher like `views-morph My.view --as react-dom
--inlineStyles`. You can safely ignore these files as they'll be created on the
fly when the morpher runs.

## Contributing to the docs app
Install the dependencies with:
```
yarn
```

Run it:
```
yarn start
```
It should automatically open the browser for you.


All the code is in the `src` folder.

To build the project, use:
```
yarn run build
```
It will create a `build` folder with the app ready to be deployed.

[How to get syntax highlighting in Views?](https://learn.viewsdx.com/setup-views-in-your-editor-165d874e570f)
