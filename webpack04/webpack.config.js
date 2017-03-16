// var webpack = require('webpack')
var path = require('path')
// NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
// 
// process.traceDeprecation = true 
module.exports = {
  // 入口文件地址，不需要写完，会自动查找
  entry: './src/main.js',
  output: {
     // 文件地址，使用绝对路径形式
    path: path.resolve(__dirname, './dist'),
    //[name]这里是webpack提供的根据路口文件自动生成的名字
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      // 解析.vue文件
      {
        test: /\.vue$/, 
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          //解析.vue文件中样式表
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      // 转化ES6的语法
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      //编译css并自动添加css前缀
      { 
        test: /\.css$/, 
        loader: 'style!css!autoprefixer'
      },
      //图片加上base64编码
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        exclude: /node_modules/,
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    // 别名，可以直接使用别名来代表设定的路径以及其他，在这个项目中没用到
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
   // 服务器配置相关
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  // 开启source-map，webpack有多种source-map，在官网文档可以查到 eval-source-map 不能实现断电调试， source-map 和 cheap-module-source-map 就没问题
  devtool: '#eval-source-map'
}
