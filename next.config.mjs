/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    eslint: {
        // Deshabilitar ESLint durante el build para Netlify
        ignoreDuringBuilds: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    turbopack: {
        rules: {
            '*.svg': { loaders: ['@svgr/webpack'], as: '*.js' },
        },
    },
};

export default nextConfig;
