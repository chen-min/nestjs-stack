
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const responseIntercept_1 = require("./common/responseIntercept");
const abnormalFilter_1 = require("./common/abnormalFilter");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalInterceptors(new responseIntercept_1.ResponseIntercept());
    app.useGlobalFilters(new abnormalFilter_1.AbnormalFilter());
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
