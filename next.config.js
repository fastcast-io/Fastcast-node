const { parsed: localEnv } = require("dotenv").config()
const webpack = require("webpack")
const withSass = require("@zeit/next-sass")
const withCss = require("@zeit/next-css")

module.exports = withCss(withSass({
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
        return config;
    }
}))