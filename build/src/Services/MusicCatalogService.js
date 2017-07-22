"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MusicCatalogService {
    constructor(repository) {
        this.repository = repository;
    }
    get() {
        return this.repository.get();
    }
    getById(id) {
        return this.repository.getById(id);
    }
    add(track) {
        return this.repository.add(track);
    }
    edit(id, track) {
        return this.repository.edit(id, track);
    }
    delete(id) {
        return this.repository.delete(id);
    }
}
exports.MusicCatalogService = MusicCatalogService;
//# sourceMappingURL=MusicCatalogService.js.map