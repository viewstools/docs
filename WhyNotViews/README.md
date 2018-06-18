# Why not Views?

## I use different target platform

Views morphs to React and React Native. If you use Vue, Angular, or any other
front-end library that Views doesn't currently morph to you will have to write
new morpher, and we can guide you through the process.

## My designers want to control animations

We are working on cross-platform animations in the Views language [Contribute here](https://github.com/viewstools/morph/issues/11))

Fully custom animations are always possible with Javascript integration of
React Animated, or any in React Web projects transforms and transitions are possible today.

## I need more integration with my current code editor

The current level of integration in the code editors stops at syntax highlighting
for Views language.

You can contribute to linting for Views [Contribute here](https://github.com/viewstools/morph/issues/19).

Your logic files will work with your current linting tools, because they are Javascript.

## I want to use Views Tools for React Native app

The morphing process is not yet 100% accurate between React Web and React Native,
and results in some discrepancies between what you see in the Tools and in the app running
on a real device, or iOS simulator. [Contribute here](https://github.com/viewstools/morph/issues/47)

## I want to mix logic and interface styling in the same component

Views has a specific pattern to separate logic from interface composition.
We do that because the interface changes more often than the logic. That means,
once the `slots` (props) contract is set, the changes in design are decoupled from the logic,
and both teams can work in parallel.

Reach out with questions via our [Slack Questions Channel](https://slack.viewsdx.com/).
Mention `@tombrewsviews` or `@dario` to make sure that we get your notifications.
