module.exports = {
	entry: "./src/main.ts",
	output: {
		filename: "main.js",
		path: __dirname + "/dist"
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},

	module: {
		loaders: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader"
			},
			{
				test: /\.css$/,
				loader: 'style!css?modules&importLoaders=1',
				// loaders: ['style', 'css']
			}
		],

		preLoaders: [
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ test: /\.js$/, loader: "source-map-loader" }
		]
	},

	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.

	// ACTIVATE if loaded externally (eg referenced in your HTML file)
	// DEACTIVATE if you want them to be part of the bundle (larger file size)
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	},
};
