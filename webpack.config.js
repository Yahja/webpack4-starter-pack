const enviroment = (process.env.NODE_ENV || 'development').trim();

if (enviroment === 'development'){
module.exports = require('./config/webpack.dev.config');
} else {
module.exports = require('./config/webpack.prod.config');
}