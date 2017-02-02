var path = require('path');
var webpack = require('webpack');
var assetsPath = path.join(__dirname, 'src');

var DEVELOPMENT = process.env.NODE_ENV === 'development';


var config = {
  entry :  {
    bundle :  ['babel-polyfill'],
  },
  output: {
    chunkFilename: '[name].js',
    filename: '[name].js', //
    path: path.join(assetsPath,'../' ,"assets/"),
    publicPath: 'http://localhost:8080/assets/'
  },
  module: {
    rules: [
      {
        //tell webpack to use jsx-loader for all *.jsx files
        test: /.jsx?$/,
        use: ['babel-loader'],
        exclude:/node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules : [
      path.resolve(assetsPath),
      path.resolve(__dirname,'node_modules')
    ]
  },
  devtool : '#source-map',
  plugins: [
  ]
};




if(DEVELOPMENT){
  //push webpack devserver
  config.entry.bundle.push(
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server'
  );


  //config.module.rules[0].use.unshift('react-hot-loader/webpack');


  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  );

} else {

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  );
}
//Push entry always
config.entry.bundle.push(path.resolve(assetsPath,'index.js'));


module.exports = config;
