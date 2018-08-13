(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./CompositionModel/README.md":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),o=a.n(t),m=a("./node_modules/@mdx-js/tag/dist/index.js");function p(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},m=Object.keys(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}n.default=function(e){var n=e.components;p(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:n},o.a.createElement(m.MDXTag,{name:"h1",components:n,props:{id:"views-composition-model"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#views-composition-model"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Views Composition Model"),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"atomic-design"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#atomic-design"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Atomic Design"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Views uses ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://patternlab.io/"}},"Atomic Design Composition Pattern")," to ensure\ninterface consistency across all views."),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"atomic-design.jpg",alt:"What is Atomic Design Pattern?"}})),o.a.createElement(m.MDXTag,{name:"p",components:n},"Views composition model is a collection of embeddable blocks."),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"BlocksComposition1.jpg",alt:"Composition model1 - embeddable"}})),o.a.createElement(m.MDXTag,{name:"p",components:n},"Every ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".view")," file is a self contained component with a top level container block and content blocks.\nAs a component it can be used inside of any other ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".view")," file and styled at point of use."),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"BlocksComposition2.jpg",alt:"Composition model2 - point of use"}})),o.a.createElement(m.MDXTag,{name:"p",components:n},"The power of the atomized composition model allows components to become reusable templates as the\napp's functionality and the design system grows."),o.a.createElement(m.MDXTag,{name:"p",components:n},"We use ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/facebook/yoga"}},"Yoga layout engine")),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"containers-and-content-blocks"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#containers-and-content-blocks"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Containers and content blocks"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Containers wrap other blocks, displace, and align them.\n",o.a.createElement(m.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"containerscontent.jpg",alt:"Containers and Content"}})),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"containers"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h3",props:{"aria-hidden":!0,href:"#containers"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Containers"),o.a.createElement(m.MDXTag,{name:"ol",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Horizontal distributes blocks inside next to each other."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Vertical distributes blocks inside on top of each other."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"List repeats one block based on the amount of passed data.\n",o.a.createElement(m.MDXTag,{name:"img",components:n,parentName:"li",props:{src:"containers.jpg",alt:"Containers wire-frame"}}))),o.a.createElement(m.MDXTag,{name:"p",components:n},"Examples of final interface\n",o.a.createElement(m.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"containersFinal.jpg",alt:"Containers final interface representation"}})),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"../Blocks/README.md"}},"More on containers")),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"content-blocks"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h3",props:{"aria-hidden":!0,href:"#content-blocks"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Content blocks"),o.a.createElement(m.MDXTag,{name:"ol",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Capture block lets you capture user input as data."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Image block displays graphic files, like JPGs, PNGs, GIFFs, and more"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Text block renders text in the view."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"SVG block renders vector graphics.\n",o.a.createElement(m.MDXTag,{name:"img",components:n,parentName:"li",props:{src:"contentblocks.jpg",alt:"Content blocks"}}))),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"../Blocks/README.md"}},"Examples of basic blocks")),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"proximity-nesting-and-composer"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#proximity-nesting-and-composer"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Proximity nesting and Composer"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Proximity nesting (when you use code editor) is how we do composition inside a view.\nYou can think about your view as a stack of blocks where new lines set blocks apart."),o.a.createElement(m.MDXTag,{name:"p",components:n},"Composer is a composition tool, and comes with Views Tools."),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"Example #1 In Composer")),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"nesting1.png",alt:"Nesting Levels 1 - Text inside the Second level container"}})),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"Example #1 In Code")),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-views"}},"FirstNestingLevel Vertical\nSecondNestingLevel Vertical\nText\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"In the example above, the hierarchy is:"),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"FirstNestingLevel")),o.a.createElement(m.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"SecondNestingLevel")),o.a.createElement(m.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Text"))))))),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"Example #2 In Composer")),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"nesting2.png",alt:"Nesting Levels 2 - Text inside the First level container"}})),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"Example #2 In Code")),o.a.createElement(m.MDXTag,{name:"p",components:n},"What if we want to have the text at the same level of ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"InsideTop"),"? Our code\nwould look like:"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-views"}},"FirstNestingLevel Vertical\nSecondNestingLevel Vertical\n\nText\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Our hierarchy now looks like:"),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"FirstNestingLevel")),o.a.createElement(m.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"SecondNestingLevel")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Text"),"\nThat new line before ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Text")," separates it from ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"InsideTop"),".")))),o.a.createElement(m.MDXTag,{name:"p",components:n},"Each new line will move blocks below one nesting level higher, and since a view\ncan only have one top level block, you can remove blocks from the view by adding\nenough empty space before."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre"},"Top Vertical\nText\n\n\nText\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"In the example above, the second ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Text")," is outside of the top level container\ntherefore it won't render in the view."),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"save-and-re-use-view-files"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#save-and-re-use-view-files"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Save and re-use .view files"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Views can be used as part of other views by referencing their file name."),o.a.createElement(m.MDXTag,{name:"p",components:n},"Common use case: Say you have a View that contains a button with a text label and\nyou want to choose different label, or the fontSize depending where you use it."),o.a.createElement(m.MDXTag,{name:"p",components:n},"Here're simple steps to extract blocks and re-use them:"),o.a.createElement(m.MDXTag,{name:"ol",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Save the button code to separate .view file and give it a name\nstarting with a capital letter"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Replace the previous button code with only the name of the extracted View,\nin our example it's ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Filename")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"From now on ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Filename.view")," is your Custom block and you will\nsee it being updated across your app upon any new changes.")),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"use-case-one---change-text-at-the-point-of-use"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h3",props:{"aria-hidden":!0,href:"#use-case-one---change-text-at-the-point-of-use"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Use case one - change text at the point of use"),o.a.createElement(m.MDXTag,{name:"p",components:n},"This is a simple View with one Text block BEFORE using it as a Custom Block:"),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"reuse1.png",alt:"Button with Text block as part of it"}})),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"before")),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-views"}},"Button Vertical\nbackgroundColor #009fff\nborderRadius 8\nText\npadding 20\ncolor white\nfontFamily Montserrat\nfontSize 16\nfontWeight 700\ntext BUY NOW!\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Take all the lines of the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Text")," block and paste them to a new document. Save it\nwithin your project as ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Label.view"),". If you want to reuse the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Label")," in many places with\ndifferent text, turn it into slot by adding ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<")," before the value."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-views"}},"Label Text\npadding 20\ncolor white\nfontFamily Montserrat\nfontSize 16\nfontWeight 700\ntext < default label\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"And here's how it should look like AFTER saving ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Text")," as ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Label.view")," file\nand using it in the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Button.view")," file:"),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"reuse2.png",alt:"Button with Text block used as a Custom Label block"}})),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"after")),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-views"}},"Button Vertical\nbackgroundColor #009fff\nborderRadius 8\nLabel\ntext BUY NOW!\n")),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"use-case-two---change-the-size-of-the-font-in-one-place"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h3",props:{"aria-hidden":!0,href:"#use-case-two---change-the-size-of-the-font-in-one-place"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Use case two - change the size of the font in one place"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Back to our example. To change the font size in all instances of ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Button.view"),"\nchange the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fontSize")," value directly in the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Label"),":"),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"reuse3.png",alt:"Button with Label block embedded from Label.view file and small font size"}})),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"before")),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-views"}},"Button Vertical\nbackgroundColor #009fff\nborderRadius 8\nLabel\ntext BUY NOW!\n")),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-views"}},"Label Text\npadding 20\ncolor white\nfontFamily Montserrat\nfontSize 14\nfontWeight 700\ntext < default label\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"And here's how it should look like AFTER saving ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Text")," as ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Label.view")," file\nand using it in the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Button.view")," file:"),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"reuse4.png",alt:"Button with Label block embedded from Label.view file and bigger font size"}})),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"after")),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-views"}},"Button Vertical\nbackgroundColor #009fff\nborderRadius 8\nLabel\ntext BUY NOW!\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Notice that we've changed the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fontSize")," value in the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Label.view")," and the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Button.view"),'\nis affected but doesn\'t "know" anything about that change, since it happened in self-contained\n',o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Label")," file."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-views"}},"Label Text\npadding 20\ncolor white\nfontFamily Montserrat\nfontSize 20\nfontWeight 700\ntext < default label\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Reach out with questions via our ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://slack.viewsdx.com/"}},"Slack Questions Channel"),".\nMention ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"@tom")," or ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"@dario")," to make sure that we get your notifications."))}}}]);