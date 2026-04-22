import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer:{
    watchFiles:['./src/template.html']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {  //this is the loader defines how to process diff file types like the png file 
    rules: [
      {
        test: /\.css$/i,  
        use: ["style-loader", "css-loader"]
      },
      {
        test:/\.(png|svg|jpg|jpeg)$/i,
        type:"asset/resource"
      },
    ],
  },
};