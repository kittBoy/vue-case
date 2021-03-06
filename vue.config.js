const path =  require('path')
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/vue-case/'
        : '/',
    chainWebpack: config => {
        // remove the old loader
        console.log(config)
        config.module.rules.delete('svg')

        // add the new one
        config.module.rule('svg')
            .test(/\.svg$/)
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })

    }
}