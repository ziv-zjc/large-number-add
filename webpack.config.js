const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: "none", //关闭压缩
    entry: {
        'large-number-add': './src/index.js',
        'large-number-add.min': './src/index.js'
    },
    output: {
        filename: '[name].js',
        library: 'largeNumber', //打包的库名
        libraryTarget: 'umd', // amd cjs esm
        libraryExport: 'default' //设置成default 使用引入时候方便
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({ //webpack4 设置成production默认使用此压缩插件；基于uglify改造，比uglify（3.0版本以上支持es6）支持es6语法
                include: /\.min\.js$/,
            })
        ]
    }
}