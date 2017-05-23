exports.up = function(knex, Promise) {
  return knex.schema.createTable("fare_attributes", function(table) {
    table.string("fare_id");
    table.string("price");
    table.string("currency_type");
    table.string("payment_method");
    table.string("transfers");
    table.string("transfer_duration");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fare_attributes');
};
