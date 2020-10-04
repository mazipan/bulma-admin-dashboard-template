const isProd = process.env.NODE_ENV === 'production';
const publicPath = isProd ? '/bulma-admin-dashboard-template' : '';

module.exports = {
  config: {
    isProd,
    publicPath,
  },
};
