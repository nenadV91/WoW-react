const path = require('path');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'docs/')
	},
	devServer: {
		port: 4000,
		contentBase: path.resolve(__dirname, 'dist/'),
		historyApiFallback:{
            index: 'dist/index.html'
        }
	},
	resolve: {
	    extensions: ['.js', '.jsx']
	},
	module: {
		rules: [{
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'stage-2', 'react']
			}
		}, {
	        test: /\.css$/,
	        use: [
	          { loader: "style-loader" },
	          { loader: "css-loader" }
	        ]
	    }]
	}
}