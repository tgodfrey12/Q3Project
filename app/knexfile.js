module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'capMetroDB',
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: 'capMetroDB-test',
    }
  }

};
