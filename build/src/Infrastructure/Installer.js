"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const Types_1 = require("../Constants/Types");
const VinylCatalog_1 = require("../Repositories/VinylCatalog");
let container = new inversify_1.Container();
container.bind(Types_1.default.IMusicRepository).to(VinylCatalog_1.VinylCatalog);
exports.default = container;
//# sourceMappingURL=Installer.js.map