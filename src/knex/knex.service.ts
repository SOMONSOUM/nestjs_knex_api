import { Injectable } from '@nestjs/common';
import knex from 'knex';

@Injectable()
export class KnexService {
  createKnexContext() {
    return {
      default: knex({
        client: 'mysql2',
        connection: process.env.MYSQL_DEFAULT,
        pool: { min: 3, max: 10 },
      }),
    };
  }
}
