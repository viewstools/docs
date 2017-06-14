# How can you benefit from what we are doing?
👋 Today Views allows teams to become more cross-functional by the use of clean,
simple, and meaningful code.

Its small learning curve opens new possibilities of contribution, even for
non-technical members, like designers or business analysts.


## Is someone else using it successfully?
Yes! 🚀 We currently have a strategic partner using Views to deliver their core
application to their 50 million users in the USA. We're gathering numbers and
drafting a story that should help you understand what it meant for them to adopt
Views in practical terms.

Of course we use it to build things too. The docs app in this repo is an example
of it. We'll be open sourcing more apps soon to showcase different uses of Views.


## What is it?
Views is a simplified front-end language to describe user interfaces (UI) and
their interactions (UX).

Its main goal is to allow non technical people to be able to contribute to the
final product in a direct way.

Does this mean that Views replaces tools like Illustrator, Invision, Sketch or
the good ol' pen and paper? Kind of. You can still start your process in
whatever makes you happier. Funnily enough, both, developers and designers tend
to draw blocks in a way or another that represent how their application will
work in logical terms. So whatever helps you get started, please, keep on doing
it and transition to Views as you see fit.

In our experience, we've found that the sooner we get into it, we had a better
chance at delivering something that our users really wanted and are able to
completely avoid the misunderstandings that come from working in a vacuum for
too long.

## Why Views?
I'll be honest with you, we made Views for us 😜. The amount of time we spent
handing designs off and waiting for them to be real was ridiculous so we figured
we may as well do something about it.

So, yeah, Views means that designers, as well as developers, code.

Coding helps you understand how the platform you're building for works.

Developers are happy coding. However, whether designers should code or not, is a
topic that's kind of hot nowadays in the industry with all sort of points of
view on it. We think that they should, but maybe not in the way we know code
today.

Whether you pick HTML and CSS, React, Vue, Angular, Ember, Web Components, Svelte,
or whatever other take at writing your app, there's a lot to learn for a newcomer.
Designers in particular with all the other things they have to do while
building a product, don't have tonnes of time to spare. They have to use it
wisely.

_We think that the code we write should be beautiful, meaningful, and simple._

Views sets us is free from unnecessary punctuation and indentation, letting us
focus on what matters the most: how we describe our application.

When you look at the code you can even think about it as a properties panel in
Sketch or Illustrator if you like.

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

## Blocks

Views are made out of blocks.

A `Hello World` example in Views may look like:
```views
Text
text Hello World
```

A block is defined by its type, eg, `Block` and configured by its properties,
which we'll call props from now on because it's shorter 😬. In the example, the
prop key we're using is called `text` and it has a value of `Hello world`.

In Views we use a special notation for the prop keys called camel case, which is
a fancy way of saying that if you have a prop key reading `background-color`,
when camel cased, it should be `backgroundColor`. 🐫.

### The types of blocks
In Views we distinguish three types of blocks: Containers, Content and
Custom blocks.

*Container* blocks let you group blocks together. They are:
* `Vertical`
* `Horizontal`
* `List`

`Vertical` and `Horizontal` let you lay blocks out. `Vertical` will stack any
blocks inside of it one below the other and `Horizontal` will get them side by
side.

Views uses a thing call Flexible Box, or flexbox, to layout your blocks in the
UI. It's a layout mode intended to accommodate different screen sizes and
different display devices without much effort.
Tom wrote a great post a while back explaining our approach at a simplified
flexbox, [check it out here](https://learn.viewsdx.com/simplified-flexbox-for-designers-7adc79aebf55).
[If you're curious about ou can read more about flexbox here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes).

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

At this point we should probably explain what `props.doSomeAction` means, right 😬?
`props` is stuff given to your view from the outside. In this example,
`doSomeAction` is an example of an external function, ie, some piece of logic in
your application that's going to be called when that button gets clicked or
pressed. A `prop` can be anything though. For example, say we wanted to have
some piece of text to be dynamically set in our app, then we would do something
like:

```views
Text
text props.text
```
That means that the text will take any value given to it.


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
* `Capture`
* `Image`
* `Svg`
* `Text`

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

TODO `onClick toggle props.stuff`

### Naming blocks
You can name a block by doing something like this:

```views
MyBlock is Vertical
```

It's something along the lines of `Name is BlockType`.

[Here's a very neat trick to make your code even more readable and reusable
through naming blocks](https://youtu.be/S-5rbcnXWtI?t=51m38s)

This is a super handy pattern for QA, which can now access the elements using
data attributes TODO.

### Proximity nesting
[See this bit of this video for now](https://www.youtube.com/watch?v=S-5rbcnXWtI&feature=youtu.be&t=37m54s)

## .view.tests
✨
We all want our UIs to be tested. It's hard to do that though. UI in particular
changes often and it's a bit painful to keep your tests updated at all times.

We want to help make testing easier and we've done that in Views through a
practical application. Right now, our tests help you design your
Views at different stages. Soon enough, they will automatically create unit
tests for your views to ensure that any future changes are being consciously
applied and that unwanted regressions are caught in time.

It kind of works like this. Saw we have a View that shows a list of people:
```views
People is Vertical
List
from props.people
Text
text item.name
```
TODO

## .view.logic
TODO

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

## I ran views-morph on my project and it created a bunch of other files, what's going on?
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
