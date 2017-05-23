exports.up = function(knex, Promise) {
  return knex.schema.createTable("trips", function(table) {
    table.string("route_id");
    table.string("service_id");
    table.string("trip_id");
    table.string("trip_headsign");
    table.string("trip_short_name");
    table.string("direction_id");
    table.string("block_id");
    table.string("shape_id");
    table.string("wheelchair_accessible");
    table.string("bikes_allowed");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trips');
};
