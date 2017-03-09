module.exports = {
  port: 3000,
  session: {
    secret: 'qlcblog',
    key: 'qlcblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost/qlcblog'
};