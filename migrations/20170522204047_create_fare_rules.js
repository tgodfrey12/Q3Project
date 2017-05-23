exports.up = function(knex, Promise) {
  return knex.schema.createTable("fare_rules", function(table) {
    table.string("fare_id");
    table.string("route_id");
    table.string("origin_id");
    table.string("destination_id");
    table.string("contains_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fare_rules');
};
