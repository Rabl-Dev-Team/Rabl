module.exports = {
	"mode": "development",
	"entry": "./src/index.js",
	"devtool": "source-map",
	"module": {
		"rules": [
			{
				"enforce": "pre",
				"test": /\.(js|jsx)$/,
				"exclude": /node_modules/,
				"use": "eslint-loader"
			},
			{
				"test": /\.js$/,
				"exclude": /node_modules/,
				"use": {
					"loader": "babel-loader",
					"options": {
						"presets": ["@babel/preset-env"],
						"plugins": [
							["@babel/plugin-proposal-class-properties"],
							["@babel/plugin-proposal-decorators", {decoratorsBeforeExport: true}]
						]
					}
				}
			},
			{
				"test": /\.scss$/,
				"use": [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			}
		]
	}
}