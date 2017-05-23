exports.up = function(knex, Promise) {
  return knex.schema.createTable("fare_info", function(table) {
    table.string("feed_publisher_name");
    table.string("feed_publisher_url");
    table.string("feed_lang");
    table.string("feed_start_date");
    table.string("feed_end_date");
    table.string("feed_version");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fare_info');
};
