const withSass = require('@zeit/next-sass')

module.exports = withSass({
    webpack (config, options) {
        config.resolve.alias['@'] = __dirname
        return config
    }
})
