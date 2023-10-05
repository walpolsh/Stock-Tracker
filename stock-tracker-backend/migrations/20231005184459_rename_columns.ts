import {Knex} from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table(process.env.DB_NAME, table => {
    table.renameColumn('52_Week_High', 'fifty_two_week_high');
    table.renameColumn('52_Week_Low', 'fifty_two_week_low');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table(process.env.DB_NAME, table => {
    table.renameColumn('fifty_two_week_high', '52_Week_High');
    table.renameColumn('fifty_two_week_low', '52_Week_Low');
  });
}
