module.exports = {
    apps: [
        {
            name: 'website',
            script: 'serve',
            args: 'build 4001',
            env_production: {
                NODE_ENV: 'production'
            },
            env_development: {
                NODE_ENV: 'development'
            }
        }
    ]
};
