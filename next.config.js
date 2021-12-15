const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
  },
  images: {
    domains: ['i.pravatar.cc', 'gravatar.com', 'localhost', 'mcss-cms.utm.utoronto.ca'],
  },
};
