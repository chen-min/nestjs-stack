
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
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
//# sourceMappingURL=config.js.map
