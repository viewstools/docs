export const imports = {
  'DevEnvironmentSetup.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "dev-environment-setup" */ 'DevEnvironmentSetup.md'),
  'Animations/README.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "animations-readme" */ 'Animations/README.md'),
  'Blocks/README.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "blocks-readme" */ 'Blocks/README.md'),
  'CompositionModel/README.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "composition-model-readme" */ 'CompositionModel/README.md'),
  'Conventions/README.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "conventions-readme" */ 'Conventions/README.md'),
  'Logic/README.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "logic-readme" */ 'Logic/README.md'),
  'Properties/AllStylingProperties.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "properties-all-styling-properties" */ 'Properties/AllStylingProperties.md'),
  'Properties/Flex.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "properties-flex" */ 'Properties/Flex.md'),
  'Properties/README.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "properties-readme" */ 'Properties/README.md'),
  'ReactComponents/README.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "react-components-readme" */ 'ReactComponents/README.md'),
  'Routes/README.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "routes-readme" */ 'Routes/README.md'),
  'Scopes/README.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "scopes-readme" */ 'Scopes/README.md'),
  'SyntaxHighlighting/README.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "syntax-highlighting-readme" */ 'SyntaxHighlighting/README.md'),
  'UseViews/README.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "use-views-readme" */ 'UseViews/README.md'),
  'WhyNotViews/README.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "why-not-views-readme" */ 'WhyNotViews/README.md'),
}
