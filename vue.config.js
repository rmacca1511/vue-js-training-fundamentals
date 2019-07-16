module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.coffee$/,
          use: ['coffee-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 5000,
                fallback: {
                  loader: 'file-loader',
                  options: {
                    name: 'img/[name].[hash:8].[ext]',
                  },
                },
              },
            },
          ],
        },
      ],
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
    },
  },
};

/* Used for modifying limits and rules in existing web config but doesnt
work for some reason, commented out for now */

// module.exports = {
//   configureWebpack: {
//     config.module.rules.push({
//       test: /\.coffee$/,
//       use: ['coffee-loader'],
//     });


// const newRule = {
//   test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
//   use: [
//     {
//       loader: 'url-loader',
//       options: {
//         limit: 5000,
//         fallback: {
//           loader: 'file-loader',
//           options: {
//             name: 'img/[name].[hash:8].[ext]',
//           },
//         },
//       },
//     },
//   ],
// };

// const imagesRuleIndex = config.module.rules
//   .findIndex()(x => x.test.source.includes('png|jpe?g|gif'));

// config.module.rules.splice(imagesRuleIndex, 1, newRule);
//   },

//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:8081',
//         changeOrigin: true,
//       },
//     },
//   },
// };
