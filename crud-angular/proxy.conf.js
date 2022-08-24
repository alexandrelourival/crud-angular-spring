const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:4201/',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
