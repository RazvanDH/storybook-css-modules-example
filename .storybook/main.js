// const path = require('path')
// // const PostcssNested = require('postcss-nested')
// // const PostcssPresetEnv = require('postcss-preset-env')
// // const PostcssReporter = require('postcss-reporter')
// // const PostcssFlexbugsFixed = require('postcss-flexbugs-fixes')

// const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
  addons: ['@storybook/addon-docs/preset'],
//   webpackFinal: async (config, { configType }) => {
//     // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
//     // You can change the configuration based on that.
//     // 'PRODUCTION' is used when building the static version of storybook.
//     // config.plugins.push(new MiniCssExtractPlugin())
//     // config.stats = 'verbose'


//     // newRules.push({
//     //   test: /\.css$/,
//     //   use: [
//     //     MiniCssExtractPlugin.loader,
//     //     {
//     //       loader: 'css-loader',
//     //       options: {
//     //         modules: true,
//     //         importLoaders: 1,
//     //         import: true,
//     //       }
//     //     },
//     //     {
//     //       loader: 'postcss-loader',
//     //       options: {
//     //         ident: 'postcss',
//     //         parser: 'postcss-safe-parser',
//     //         plugins: [
//     //           PostcssNested(),
//     //           PostcssPresetEnv(),
//     //           PostcssReporter(),
//     //           PostcssFlexbugsFixed()
//     //         ]
//     //       }
//     //     }
//     //   ],
//     //   include: path.resolve(__dirname, '/src/styles')
//     // })

//     // config.module.rules = newRules
//     // config.plugins.push(new MiniCssExtractPlugin())

//     // config.module.rules.unshift({
//     //   test: /\.js$/,
//     //   exclude: [/node_modules/, /__tests__/],
//     //   loader: 'babel-loader',
//     //   include: [
//     //     path.resolve('./src')
//     //   ]
//     // })

//     // const originalRules = config.module.rules
//     // const newRules = originalRules.filter(rule => !(rule.sideEffects))

//     // newRules.push({
//     //   test: /\.css$/,
//     //   use: [
//     //     MiniCssExtractPlugin.loader,
//     //     {
//     //       loader: "style-loader",
//     //       options: { esModule: true }
//     //     },
//     //     {
//     //       loader: "css-loader",
//     //       options: {
//     //         importLoaders: 1,
//     //         modules: {
//     //           localIdentName: "[name]__[local]__[hash:base64:5]"
//     //         },
//     //       }
//     //     }
//     //   ],
//     //   include: path.resolve(__dirname, '/src/styles')
//     // })

//     // config.module.rules = newRules

//     // Return the altered config
//     const rules = config.module.rules.map(rule => {
//       if (rule.test.toString() !== '/\\.css$/') {
//         return rule;
//       }

//       const use = rule.use.map(u => {
//         const { loader } = u;

//         if (!loader || !loader.includes('/css-loader/')) {
//           return u;
//         }

//         const options = {
//           ...u.options,
//           modules: true
//         };

//         return {
//           ...u,
//           options
//         };
//       })

//       return {
//         ...rule,
//         use,
//         include: path.resolve(__dirname, '/src/styles')
//       };
//     })



//     return {
//       ...config,
//       module: {
//         ...config.module,
//         rules,
//       }
//     };
//   },
}
