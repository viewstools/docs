# Use Views in your project

## Open source (code driven)

1. If you don't have an app, create a new one:
_To make a new web or desktop app_ run:
```
yarn global add create-react-app
create-react-app my-app
```

_To make a new native app_ run:
```
yarn global add create-react-native-app
create-react-native-app my-app
```

2. Add Views on it:

```
yarn global add use-views
cd my-app
use-views
```

## Using Views Tools (code and WYSIWYG editor for designers)
Reach out to `@views-tom` in via our Slack Team to enroll for a pilot of beta
tools.

Views Tools are designed to minimise the learning curve for non-developers, and include:

### Design System Window
Look inside of your React project folder. Browse and access all components in a
visual way to easily determine the state of your Design System.

### Live Preview
After every change, the live preview shows what your users will see.

### Composer
Use the layout composer to reason about the structure of a view. Drag and drop,
add in place and reorder blocks - Trello style. Take advantage of Atomic Design
nesting patterns for great reusability and control.

### Props Panel
Align with Flex, tweak typography, adjust white space, pick the right colours,
use dynamic props, images and SVGs. Gain full creative control with the use of
straightforward CSS-like properties.

### Props Data
Provide temporary data for the dynamic `props` during design process to take full
control over the states and interactions of the interface.

We aim to release first public version of Tools after finishing testing phase in
the first quarter of 2018.

## More, or less, convenient questions and answers
### About the benefits
1. How my distributed teams can benefit from Views?
2. What about other designers, those who don't have front-end experience, how can they contribute?

[![Quick overview of how to implement a feature in Views](UseViews/FAQTools1.png](https://vimeo.com/250934086 "Quick overview of how to implement a feature in Views")

### Out of experimental phase
QUESTION: The topmost concern is that the entire thing looks rather experimental, implies certain workflows, and at the same time - rather opinionated and intrusive (both project-structure-wise and dev-workflow).

ANSWER:
- We are are getting out of the experimental stage as we test Views with selected partners. We lead the change in product delivery space towards inclusion, transparency, and open participation. At the same time, we set new best practices in place where until now there were separate agendas and silos. The way we build products has to change, and it’s changing as we speak. We have a unique opportunity to be part of this success story.
- Yes, Views has a specific workflow for designers and developers focused on collaboration.
- Other than having logic files to control the view file next to each other, there are no other structural requirements.

### We optimize for both: designers and developers
QUESTION: The other big concern is syntax - while terse its rather unreadable, you can't "scan" it and immediately understand the structure (as opposed to HTML/JSX). That might save some keystrokes but devs spend way more time reading the code than writing it. Well, maybe there are other reasons behind this syntax. At least minimal indentation would help already.

ANSWER:
- Syntax highlighting for Sublime, Atom, Code, VIM helps readability
- We recommend to use Composer to reason about the structure of the UI (it’s one of the tools in Views Tools package)
- If indentation is absolutely required we are open to work with you to make it happen in the open source morpher https://github.com/viewstools/morph

### Advanced development features are on the roadmap
QUESTION: Another related concern is a custom format/language/DSL in general. Aside from the need to learn and understand the new syntax, there's not IDE/editor support, autocomplete, type-checking, linting, Prettier formatting, etc. UPDATE: Yeah, there are popular editors' extensions being developed but GitHub doesn't understand that, and it's definitely below the line compared to JS/TS

ANSWER:
- Typescript integration is possible https://github.com/lyft/react-javascript-to-typescript-transform
- Regarding Github support https://github.com/github/linguist/blob/master/CONTRIBUTING.md#adding-a-language
- Linting on text editors is on our roadmap. More info https://github.com/viewstools/morph/issues/19
- You (an engineer) would mostly write logic (prue JS of your choice) and sometimes help a designer understand the technical aspects of the view structure, especially when very complex components are in use, i.e. drag and drop, recursive structures (which are basic for any developer to grasp). You won’t be writing Views code. That’s my (a designer’s) responsibility.

### Easy in, easy out
QUESTION: Not clear what is the integration workflow (i.e., embedding Views-driven components into existing React app), is it a compiled version of component being added to the project? Is "Views" an all-or-nothing kind of thing?

ANSWER:
![Views Project Structure](UseViews/ProjectStructure.jpg)

### Your project, your folder structure
QUESTION: Synthetic limitations. Like one block in a file - sometimes, its rather convenient to define few private glamorous/styled-components/whatever-else-CSS-in-JS components right in the same file, those are getting composed into a single  export ed component then. You can then generalize/extract these sub-components at will without changing the original component's public contract.

ANSWER:
- Views recognizes files in the project despite where they are in the folders. If you want to group things, eg, put all buttons into a Buttons folder.

### There is logic to logic files
QUESTION: The default React component contract is preserved but is assumed to be a conceptually different thing. The component is component, whatever that is. Why would the regular wrapping component (a new component that is created and wraps over "Views" component) have the .view.logic.js suffix? Its still full-blown React component, not necessarily a "logic" or "extension", right?

ANSWER:
- We are open to changing the extension of the logic file. Therefore, the name `.view.logic.js` was used to reinforce the pattern that the view has logic attached to it. If that file exists, Views picks it up instead of the view.js when it is required by another view.
- Logic files are not always required for each view, team can make other implementation choices. You can pass props across like in any React application and choose where your logic lives.

### Use third party components via JS
QUESTION: Manual boilerplate to integrate the existing ready-to-use 3rd-party component (I know this will be addressed at some point, but in the current implementation its kinda diminishes the purpose - since we write the terse view first, but are inclined to have a "wiring" file for every external component).

ANSWER:
- This is a pattern that other languages, like ReasonML, are using to integrate with third party packages. We’re open to a better way of handling this. Most times you shouldn’t need lots of custom/external views, the connection to npm packages would generally be in your own logic.
- Views supports `.js` files with a `// @view` pragma as a way to tell Views that the file is a custom/fake view.
- This point in docs expands on the subject https://github.com/viewstools/docs#views-and-your-react-components

### Views files are responsible for composition and styling (as well as, the advanced styling with scopes)
QUESTION: The overall approach somewhat encourages mixing style properties with data/behavior properties.

ANSWER:
- Views expresses UI and UX, and doesn’t dictate what happens when a button is clicked, and you change your data. That’s the responsibility of the logic file and its dependencies.

### Views scopes enter the next implementation stage
QUESTION: CSS combinators, pseudo-classes, media-queries, animations somehow?

ANSWER:
- Some pseudo classes like hover and focus are supported. The rest can be done through scopes.
- We are planning media queries through scopes too.
- Animations are done for React Web through CSS transitions.
- In Native, you can use animated through JS and the implementation on the roadmap https://trello.com/b/NhIKKbol/views-roadmap.

### .view.js is auto-generated and shouldn't be edited
QUESTION: I ran views-morph on my project, and it created a bunch of other files, what's going on?

ANSWER:
Say you have a View called `My.view`. When morphing it, Views will create a file
called `My.view.js`. You can safely ignore `.view.js` files as they'll be created on the
fly when the morpher runs and your changes will be overwritten.
