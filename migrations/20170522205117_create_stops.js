exports.up = function(knex, Promise) {
  return knex.schema.createTable("stops", function(table) {

    table.string("stop_id");
    table.string("stop_code");
    table.string("stop_name");
    table.string("stop_desc");
    table.string("stop_lat");
    table.string("stop_lon");
    table.string("zone_id");
    table.string("stop_url");
    table.string("location_type");
    table.string("parent_station");
    table.string("stop_timezone");
    table.string("wheelchair_boarding");
    table.string("corner_placement");
    table.string("stop_position");
    table.string("on_street");
    table.string("at_street");
    table.string("heading");

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stops');
};
