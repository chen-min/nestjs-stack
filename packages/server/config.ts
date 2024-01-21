import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '8.134.163.0',
  port: 3306,
  username: 'root',
  password: 'xdclass.net168',
  database: 'xdclass-lowcode',
  entities: ['dist/**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: true,
};
