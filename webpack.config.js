const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js', // Archivo de entrada
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Maneja archivos Sass
        use: [
          MiniCssExtractPlugin.loader, // Extrae CSS a un archivo separado
          'css-loader', 
          'sass-loader' // Compila Sass a CSS
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/, // Maneja fuentes
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/', // Directorio de salida para fuentes
              publicPath: 'fonts/' // Directorio público para fuentes
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/, // Maneja imágenes
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // Directorio de salida para imágenes
              publicPath: 'images/' // Directorio público para imágenes
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body', // Inserta los scripts al final del body
    }),
    new MiniCssExtractPlugin({
      filename: 'css/styles.css', // Nombre del archivo CSS generado
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // Carpeta para servir contenido
    },
    compress: true,
    port: 9000,
    hot: true,
    open: true,
    liveReload: true, // Recarga en vivo para cambios en archivos
  },
  mode: 'development',
};
