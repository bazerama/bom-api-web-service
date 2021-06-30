module.exports = {
    apps: [
        {
            name: 'website',
            script: 'serve build 4001 --spa --name website',
            env_production: {
                NODE_ENV: 'production'
            },
            env_development: {
                NODE_ENV: 'development'
            }
        }
    ]
};
