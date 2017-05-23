exports.up = function(knex, Promise) {
  return knex.schema.createTable("agency", function(table) {
    table.string("agency_id");
    table.string("agency_name");
    table.string("agency_url");
    table.string("agency_timezone");
    table.string("agency_lang");
    table.string("agency_phone");
    table.string("agency_fare_url");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('agency');
};
