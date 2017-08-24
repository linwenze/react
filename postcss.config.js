module.exports = {
	// 此处使用postcss的插件
	plugins: [
		require('autoprefixer'),
		require('postcss-pxtorem')({
			rootValue: 100,
			propWhiteList: [],
		})
	],
};