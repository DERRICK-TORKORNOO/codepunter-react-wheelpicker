// const path = require('path')
// const HTMLWebpackPlugin = require("html-webpack-plugin")
// const htmlWebpackPlugin = new HTMLWebpackPlugin({
//     template: path.join(__dirname, "examples/src/index.html"),
//     filename: "./index.html"
// })

// module.exports = {
//     entry: path.join(__dirname, "examples/src/index.js"),
//     output: {
//         path: path.join(__dirname, "examples/dist"),
//         filename: "bundle.js"
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 use: "babel-loader",
//                 exclude: /node_modules/
//             },
//             {
//                 test: /\.css$/,
//                 use: ["style-loader", "css-loader"]
//             }
//         ]
//     },
//     plugins: [htmlWebpackPlugin],
//     resolve: {
//         extensions: [".js", ".jsx"]
//     },
//     devServer: {
//         port: 8080
//     }
// }

const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "examples/src/index.tsx"), // Change entry to TypeScript if applicable
    output: {
        path: path.join(__dirname, "examples/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/, // Add support for TypeScript files
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/, // Handles CSS files
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, "examples/src/index.html"),
            filename: "./index.html"
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"], // Add TypeScript extensions
        alias: {
            "@": path.resolve(__dirname, "src") // Optional: Resolve '@' to 'src' for cleaner imports
        }
    },
    devServer: {
        port: 8080,
        static: path.join(__dirname, "examples/dist"), // Serve the static files from the output directory
        hot: true // Enable Hot Module Replacement (HMR) for development
    },
    devtool: "source-map", // Enable source maps for easier debugging
};
