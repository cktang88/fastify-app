import { MikroORM } from '@mikro-orm/core';
import type { PostgreSqlDriver } from '@mikro-orm/postgresql'; // or any other driver package

const orm = await MikroORM.init<PostgreSqlDriver>({
  entities: ['./dist/models'], // path to your JS entities (dist), relative to `baseDir`
  dbName: 'my-db-name',
  type: 'postgresql',
});
console.log(orm.em); // access EntityManager via `em` property

export default orm;
