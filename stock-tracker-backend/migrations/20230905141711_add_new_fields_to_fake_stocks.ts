import {Knex} from 'knex';

exports.up = async function (knex: Knex) {
  return knex.schema.createTable(process.env.DB_NAME, function (table) {
    table.increments('id').primary();
    table.string('symbol', 10).notNullable().unique();
    table.string('company_name', 100);
    table.string('sector', 50);
    table.decimal('price', 14, 2);
    table.integer('volume');
    table.timestamp('last_updated').defaultTo(knex.fn.now());
    table.decimal('day_change', 14, 2);
    table.decimal('52_Week_High', 14, 2);
    table.decimal('52_Week_Low', 14, 2);
    table.decimal('EPS', 14, 2);
    table.decimal('P_E_Ratio', 14, 2);
    table.decimal('Dividend_Yield', 14, 2);
    table.decimal('Market_Cap', 14, 2);
    table.decimal('Beta', 5, 2);
  });
};

exports.down = async function (knex: Knex) {
  return knex.schema.dropTable(process.env.DB_NAME);
};
