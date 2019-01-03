module.exports = {
    entry: "./src/app.tsx",
    output: {
      filename: "bundle.js",
      path: __dirname + "/dist"
    },
    mode: 'development',
    devtool: "source-map",
    devServer: { 
      host:"127.0.0.1", 
      port:3000,
     
      },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader" },
        // { test: /\.css$/, loader: "style-loader!css-loader", include: /node_modules/ },
        // { test: /\.css$/, loader: "style-loader!css-loader?modules", exclude: /node_modules/ }, 
        {
          test:/\.css$/,
          use:['style-loader', 'css-loader']
      },
        { test: /\.png$/, loader: "url-loader"},  
        { test: /\.html$/, loader: "html-loader"}, 
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    },
  
    plugins: [
    ],
  };