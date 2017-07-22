"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Installer_1 = require("./Infrastructure/Installer");
const Identifiers_1 = require("./Constants/Identifiers");
const MusicCatalogService_1 = require("../src/Services/MusicCatalogService");
let musicRepoo = Installer_1.default.get(Identifiers_1.default.IMusicRepository);
let service = new MusicCatalogService_1.MusicCatalogService(musicRepoo);
console.log(service.get());
//# sourceMappingURL=main.js.map