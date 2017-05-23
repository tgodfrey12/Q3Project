exports.up = function(knex, Promise) {
  return knex.schema.createTable("shapes", function(table) {
    table.string("shape_id");
    table.string("shape_pt_lat");
    table.string("shape_pt_lon");
    table.string("shape_pt_sequence");
    table.string("shape_dist_traveled");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shapes');
};
