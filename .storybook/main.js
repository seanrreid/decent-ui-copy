module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: ['../design/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    refs: {
        '@chakra-ui/react': {
            disable: true,
        },
    },
    addons: [
        "@storybook/addon-docs",
        "@chakra-ui/storybook-addon",
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    features: {
        emotionAlias: false,
    },
    framework: '@storybook/react',
    staticDirs: ['../design/atoms/assets'],
};
