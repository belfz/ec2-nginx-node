module.exports = {
  apps: [{
    name: 'ec2-nginx-node',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-244-43-220.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/ec2ubuntu.pem',
      ref: 'origin/master',
      repo: 'git@github.com:belfz/ec2-nginx-node.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
