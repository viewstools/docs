# Views
**An effective framework for creating production quality interfaces**

Views is an intuitive language to define and build complex user interfaces.
Views syntax is clean, intuitive, and functional. Here's a sample:

```
Text
color deepskyblue
text Hello. Don't be a stranger!
```

There are no divs, classes or ids. We use styled blocks to compose interfaces.
Blocks make the composition easy to understand even for non-technical professionals.

Views lets you build web, iOS, Android and Desktop applications from the same codebase by
morphing to React and React Native in JavaScript. It doesn't add a runtime
overhead to your application.

Views language and its morphers are open source.
[You can contribute here](https://github.com/viewstools/morph).

We're also working on a toolset to enhance the design and development process
even more. It is currently in closed beta and we're expecting to release
the public beta by Q1 2018. Email us at hi@views.tools and we'll let you
know when its ready. [![Here is a quick (2:44s) overview](images/ViewsToolsOverview.png)](https://vimeo.com/248484288).

Join conversations:
- [Spectrum Channel](https://spectrum.chat/?t=ba1ad612-c26e-446f-9aa3-76f0c7ca6c81)
- [Slack Team](https://slack.viewsdx.com/)
- [Medium Publication](https://medium.com/viewsdx)
- [Roadmap](https://trello.com/b/NhIKKbol/views-roadmap)

## How can you benefit from it?
_Views makes teams productive._ Designers contribute directly to the production build.</br>
_Views improves build quality._ Designers can tweak styling without wasting dev time.</br>
_Views compiles to React and React Native._ No manual work is required in the compilation process.</br>
_Views comes with a creative toolset._ For designers who prefer tweak over building from scratch.

You can speed up your development.</br>
Perform faster revision loops.</br>
Test innovative ideas.</br>
Reduce the cost of design iterations.</br>

## Who is using it successfully?
- A strategic partner to deliver their core application to their 50 million users in the USA. _Web app_.
- Views toolset. _Electron Desktop app_.
- 2BFIT. _Mobile native app_ [AppStore](https://itunes.apple.com/us/app/2bfit/id1279427455?mt=8&ign-mpt=uo%3D4) [GooglePlay](https://play.google.com/store/apps/details?id=com.viewsdx.app2bfit&hl=en)
- Classuite. _Mobile native app_. [AppStore](https://itunes.apple.com/us/app/classuite-workspaces/id1329983329?mt=8) [GooglePlay](https://play.google.com/store/apps/details?id=com.classuite.workspces)

## Table of Contents
1. [Use Views in your project](UseViews/README.md)
- Open source (code driven)
- Using Views Tools (code and WYSIWYG editor for designers)
2. [Compose Views](CompositionModel/README.md)
- Atomic Design pattern
- Containers and content blocks
3. [Examples of basic blocks](Blocks/README.md)
4. [Use properties to style blocks](Properties/README.md)
5. [Use scope properties ](Scopes/README.md)





### Need help?

Tests might be tricky. Reach out with questions via our
[Slack Questions Channel](https://slack.viewsdx.com/). Mention `@views-tom` or `@dario`
to make sure that we get the notifications.

## View
### Easy in, Easy out
There is no view without `.view` file.

Each saved view will be morphed (compiled) to production quality JavaScript and
saved as `.view.js` file.

If on some point you decide you don't need Views anymore you can always use
generated components located in `.view.js` files without redoing the interface.



## .view.logic.js === Smart View
Any View file can be also wrapped with JavaScript logic to make a Smart View.

With `Counter.view` file like:
```
Text
color black
text props.number
```

We can add a `Counter.view.logic.js` file that would increment a number by one
every second like this:
```
import Counter from './Counter.view.js'
import React from 'react'

export default class CounterLogic extends React.Component {
  state = {
    number: 0,
  }

  componentDidMount() {
    this._interval = setInterval(this.increment, 1000)
  }

  componentWillUnmount() {
    clearInterval(this._interval)
  }

  increment = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  render() {
    return <Counter number={this.state.number} />
  }
}
```

A logic file is an extension to your view and Views imports that it if it's
available. In other words, if you then use your `Counter` in other views, you
will actually be using the `Counter.view.logic.js` instead.

This is where you would add any intermediate state to your views or connect them
to an external store of data.

## local state
Like a react component, your view can have local state, which you can pass to your logic component.  
For example, let's say you have a form with an input field and a submit button. On pressing the button you want to get the current value in the input field and pass that to your logic component. That would look like this:
```
Username CaptureText
placeholder Username
Button Horizontal
onClick () => props.handleSubmit(state)
Text
text Submit
```

Then, in your view logic you would get the value like so:
```
 handleSubmit = state => {
   this.setState({
     username: state.username,
   });
```


## .view.tests.json
TODO 💾

## animations
TODO

## routes and teleports
TODO
```
App Vertical

Home Vertical
at /
Text
text main
Vertical
teleportTo page
Text
text go to page


Page Vertical
at /page
Text
text some page

Vertical
teleportTo ..
Text
text back
```

## Views and your React components
If you want to use an existing React component as is, you can import it by
defining it as a `.js` file and adding a `// @view` pragma at the top.

E.g., say you have a file called `Magic.js`:

```
// @view
import React from 'react'

export default props => props.word
```

You can now use that component as you would use any other view in your system:

```
Magic
word hey!
```

We'll be working on bridging NPM modules at some stage, but for now you can
bridge any external modules by hand. Here's an example with
[react-google-maps](https://tomchentw.github.io/react-google-maps/).

`GoogleMap.js`
```
// @view
import { GoogleMap } from 'react-google-maps'
export default ({ defaultCenterLat: lat, defaultCenterLng: lng, ...props }) => (
  <GoogleMap defaultCenter={{ lat, lng }} {...props}>
    {props.children}
  </GoogleMap>
)
```

`Marker.js`
```
// @view
import { Marker } from 'react-google-maps'
export default ({ positionLat: lat, positionLng: lng, ...props }) => (
  <Marker position={{ lat, lng }} {...props} />
)
```

Then in your view, following [the example from their docs](https://tomchentw.github.io/react-google-maps/#usage--configuration):

```
GoogleMap
defaultZoom 0
defaultCenterLat -34.397
defaultCenterLng 150.644
Marker
positionLat -34.397
positionLng 150.644
when props.isMarkerShown
```

You will notice that we've renamed certain props and flattened them out. In
order to reduce the complexity of the language we made a decision not to allow
complex objects in views as props for now. This isn't set in stone though, so if
you feel strong about it, let us know and we can work to enable a syntax like:
```
GoogleMap
defaultZoom 0
defaultCenter
lat -34.397
lng 150.644
Marker
position
lat -34.397
lng 150.644

when props.isMarkerShown
```

### .view.fake

When you add a `.js` view, our toolset will let you define a `.view.fake` file
that mocks your `.js` component. A `.js` component like our `Magic` or
`GoogleMap` components above are external and as such can't be modified in
Views. However, it's handy to have some kind of representation of them in your
preview. That's when the `.view.fake` comes into play. Take `GoogleMap` for
example, it's fake view could look like:

```
GoogleMapFake Image
source ./google-map-fake.jpg
```

## Syntax highlighting
We’ve created the following packages to help you understand `.view` files better:
* [Atom](http://atom.io/packages/language-views),
* [Sublime](https://github.com/viewstools/syntax-sublime),
* [VIM](https://github.com/viewstools/syntax-vim), and
* [VSCode](https://marketplace.visualstudio.com/items?itemName=uxtemple.views).

We currently highlight block names, numbers, props, and strings. Our highlighters
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

## Useful Conventions
### Always name blocks
### Extract blocks as view files
### Don’t name props unless you absolutely have to
### Keep props simple
### Don't repeat blocks, use lists
### Design System folders
### Sensible Duplication
### For readability, put the onWhen property as a first line below the block's name

## Blocks Examples

## Views is a knowledge transfer platform!
The value of cross-functional teams is very well known to Growth Hacking community
and it's explained well in this book [Hacking Growth: Fastest Growing Companies Breakout](https://www.amazon.com/Hacking-Growth-Fastest-Growing-Companies-Breakout/dp/045149721X)

![Cover of the mentioned book](images/growthhackingsmall.jpg)

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
development and the rest of the organisation.

_We cherish openness, learning, and frequent shipping_



## 😍 How can I help?
We're thrilled you want to help us make better UIs together 😀.
You can contribute to the docs on [this repo](https://github.com/viewstools/docs)
and to [Views morphers here](https://github.com/viewstools/morph).

If you have any questions, you can always find us on:
- Slack https://slack.views.tools,
- Email hi@views.tools,
- Twitter [@viewstools](https://twitter.com/viewstools), and
- [Spectrum](https://spectrum.chat/views).

We sometimes write stuff on our [Medium publication](https://medium.com/viewsdx) too.

License BSD-3-Clause.<br>
Copyright 2017 by UXtemple Ltd.
