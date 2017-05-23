exports.up = function(knex, Promise) {
  return knex.schema.createTable("routes", function(table) {
    table.string("route_id");
    table.string("agency_id");
    table.string("route_short_name");
    table.string("route_long_name");
    table.string("route_desc");
    table.string("route_type");
    table.string("route_url");
    table.string("route_color");
    table.string("route_text_color");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('routes');
};
