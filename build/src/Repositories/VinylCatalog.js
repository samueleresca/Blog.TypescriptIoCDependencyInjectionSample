"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Track_1 = require("../Models/Track");
const inversify_1 = require("inversify");
let VinylCatalog = class VinylCatalog {
    constructor() {
        this.vinylList = new Array(new Track_1.Track(1, "DNA.", "Kendrick Lamar", 340), new Track_1.Track(2, "Come Down", "Anderson Paak.", 430), new Track_1.Track(3, "DNA.", "Kendrick Lamar", 340), new Track_1.Track(4, "DNA.", "Kendrick Lamar", 340), new Track_1.Track(5, "DNA.", "Kendrick Lamar", 340));
    }
    get() {
        return this.vinylList;
    }
    getById(id) {
        return this.vinylList.find(track => track.Id == id);
    }
    add(track) {
        return this.vinylList.push(track);
    }
    edit(id, track) {
        var targetIndex = this.vinylList.findIndex((track => track.Id == id));
        this.vinylList[targetIndex].Artist = track.Artist;
        this.vinylList[targetIndex].Title = track.Title;
        this.vinylList[targetIndex].Duration = track.Duration;
        return this.vinylList[targetIndex];
    }
    delete(id) {
        var targetIndex = this.vinylList.findIndex((track => track.Id == id));
        if (targetIndex < -1)
            return null;
        return this.vinylList.splice(targetIndex, 1)[0];
    }
};
VinylCatalog = tslib_1.__decorate([
    inversify_1.injectable()
], VinylCatalog);
exports.VinylCatalog = VinylCatalog;
//# sourceMappingURL=VinylCatalog.js.map