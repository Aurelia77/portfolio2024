// module.exports = {
//     module: {
//         rules: [
//             {
//                 test: /\.pdf$/,
//                 use: 'file-loader',
//             },
//         ],
//     },
// };


module.exports = {
        output: {
            filename: 'my-first-webpack.bundle.js',
        },
        module: {
            rules: [{ test: /\.pdf$/, use: 'url-loader' }],
        },
};


// module.exports = {
//     output: {
//       filename: 'my-first-webpack.bundle.js',
//     },
//     module: {
//       rules: [{ test: /\.pdf$/, use: 'raw-loader' }],
//     },
//   };




