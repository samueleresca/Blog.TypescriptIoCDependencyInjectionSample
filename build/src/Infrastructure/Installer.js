"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const Identifiers_1 = require("../Constants/Identifiers");
const VinylCatalog_1 = require("../Repositories/VinylCatalog");
let container = new inversify_1.Container();
container.bind(Identifiers_1.default.IMusicRepository).to(VinylCatalog_1.VinylCatalog);
exports.default = container;
//# sourceMappingURL=Installer.js.map