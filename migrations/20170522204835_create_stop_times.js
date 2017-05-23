exports.up = function(knex, Promise) {
  return knex.schema.createTable("stop_times", function(table) {
    table.string("trip_id");
    table.string("arrival_time");
    table.string("departure_time");
    table.string("stop_id");
    table.string("stop_sequence");
    table.string("stop_headsign");
    table.string("pickup_type");
    table.string("drop_off_type");
    table.string("shape_dist_traveled");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stop_times');
};
