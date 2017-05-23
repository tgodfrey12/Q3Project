exports.up = function(knex, Promise) {
  return knex.schema.createTable("calendar", function(table) {
    table.string("service_id");
    table.string("monday");
    table.string("tuesday");
    table.string("wednesday");
    table.string("thursday");
    table.string("friday");
    table.string("saturday");
    table.string("sunday");
    table.string("start_date");
    table.string("end_date");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('calendar');
};
