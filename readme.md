  
  # Iniciando Projeto ReactJS

  * yarn add react react-dom
  * yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli @babel/cli
  * criar babel.config.js

   ```babel.config.js
module.exports = {
	presets: [
		'@babel/preset-env',
		'@babel/preset-react'
	]
} 
```
* yarn babel src/index.js --out-file public/bundle.js

* webpack.config.js - yarn add babel-loader

```webpack.config.js

const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: 
                    { loader: 'file-loader' },
                
            }
        ]
    },
};

```

* yarn add webpack-dev-server -D
* yarn webpack serve --mode development


 * Configurando CSS yarn add style-loader css-loader

 * reiniciar dev-server

 * yarn add file-loader - carrega arquivos img, video etc