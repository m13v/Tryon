const {webpack} = require("next/dist/compiled/webpack/webpack");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, {isServer}) => {
    if (!isServer) {
        config.resolve = {
            ...config.resolve,
            fallback: {
                // fixes proxy-agent dependencies
                net: false,
                dns: false,
                tls: false,
                assert: false,
                // fixes next-i18next dependencies
                path: false,
                fs: false,
                // fixes mapbox dependencies
                events: false,
                // fixes sentry dependencies
                process: false
            }
        };
    }
    config.plugins.push(new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
        resource.request = resource.request.replace(/^node:/, "");
    }))

    return config
},
// experimental: {appDir: true}
}

module.exports = nextConfig
