exports.up = function(knex, Promise) {
  return knex.schema.createTable("calendar_dates", function(table) {
    table.string("service_id");
    table.string("date");
    table.string("exception_type");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('calendar_dates');
};
