import { createPlugin } from 'docz-core'
import path from 'path'

const views = createPlugin({
  modifyBundlerConfig: (config, dev) => {
    config.module.rules.push({
      test: /\.view$/,
      use: 'raw-loader',
    })

    config.resolve.alias = {
      prettier: path.resolve(__dirname, 'prettier-shim.js'),
    }
    return config
  },
})

export default {
  files: '**/*.{md,markdown,mdx}',
  plugins: [views],
}
