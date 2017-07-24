import { IMusicRepository } from "../Repositories/IMusicRepository";
import { Track } from "../Models/Track";

export class MusicCatalogService{

    private repository: IMusicRepository;

    constructor(repository:IMusicRepository){
        this.repository= repository;
    }

    get(): Track[] {
        return this.repository.get();
    }
    getById(id: number): Track {
       return this.repository.getById(id);
    }
    add(track: Track): number {
        return this.repository.add(track);
    }
    edit(id: number, track: Track): Track {
       return this.repository.edit(id, track);
    }
    delete(id: number): Track {
      return this.repository.delete(id);
    }
}