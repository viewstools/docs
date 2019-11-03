# Custom logic

When Views Morpher runs morphs a `.view` file, it automatically creates `.view.js` file
next to it. While it might be tempting to edit that file and add your own logic,
you will find that Views Morpher will override your changes every time it runs!

So, how do you add your own custom logic to a `.view` file? With a `.view.logic.js` file.

With `Counter.view` file like:

```
Text
  color black
  text <number 1
```

We can add a `Counter.view.logic.js` file that would increment a number by one
every second like this:

```
import Counter from './Counter.view.js'
import React, { useEffect, useState } from 'react'

let CounterLogic = props => {
  let [number, setNumber] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => setNumber(number + 1), 1000)
    return () => clearInterval(interval)
  })

  return <Counter number={number} />
}
export default CounterLogic
```

A logic file is an extension to your view and Views imports that it if it's
available. In other words, if you then use your `Counter` in other views, you
will actually be using the `Counter.view.logic.js` instead.

This is where you would add any intermediate state to your views or connect them
to an external store of data.

*It's important to note that logic files are expected to import the `.view.js` file
and export a new component that adds extra logic to it.*

When you have a logic file for a view, Views Morpher will automatically import that file
instead of the raw view. Eg, say you have a `Button.view` and add a `Button.view.logic.js`.
When you use `Button` in another view like `App`, the logic file would be imported instead.

## Example on showing a list data coming from a service

We would use logic files for that containing the logic to fetch external data.

Say you have a `Posts.view` like:
```
Posts List
  from <
  Post
```

And another one `Post.view` (to show the actual post):
```
Post Vertical
  Text
    text <title This is the title
  Text
    text <body This is the body of the post. Lots of stuff goes in here.
```

You’d then add a `Posts.view.logic.js` file that will have the fetching logic in React like:
```
import React, { useState, useEffect } from 'react'
import Posts from './Posts.view.js'

export default function PostsLogic(props) {
  let [ posts, setPosts ] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(setPosts)
  },  [])

  return <Posts {...props} from={posts} />
}
```

So say you’re then using the `Posts` in `App.view` like:
```
App Vertical
  Posts
```

Views Morpher will recognise the logic file automatically for you and use that instead of the view.

In Views Tools you will see three elements rendered on the list with placeholder data on it so you can design it.

## Hover Manual
Hover manual will force the `hover` state on the companent. Use when you want to show a block on hover.

```
import useHoveredManual from 'useHoveredManual.js'

export default function DataAutoCentredLogic(props) {
  let hoveredManual = useHoveredManual()

  return <DataAutoCentred {...props} {...hoveredManual} />
}
```
[See useHoverManual](../useHoveredManual.js)

Reach out with questions via Github Issues [Github Issues](https://github.com/viewstools/docs/issues).
Mention `@tombrewsviews` or `@dariocravero` to make sure that we get your notifications.
