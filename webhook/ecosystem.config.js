module.exports = {
  apps : [{
    name: 'webhook',
    script: 'api.js',
    instances: 1,
    max_memory_restart: '256M',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
