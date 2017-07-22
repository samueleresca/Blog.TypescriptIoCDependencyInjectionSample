import {IMusicRepository} from "./IMusicRepository";
import { Track } from "../Models/Track";
import { inject, injectable, named } from "inversify";

@injectable()
export class VinylCatalog implements IMusicRepository{

    private vinylList : Track[] = new Array(
        new Track(1, "DNA.", "Kendrick Lamar", 340),
        new Track(2, "Come Down", "Anderson Paak.", 430),
        new Track(3, "DNA.", "Kendrick Lamar", 340),
        new Track(4, "DNA.", "Kendrick Lamar", 340),
        new Track(5, "DNA.", "Kendrick Lamar", 340)
    );
    

    get(): Track[] {
        return this.vinylList;
    }
    getById(id: number): Track {
       return this.vinylList.find(track=> track.Id== id);
    }
    add(track: Track): number {
        return this.vinylList.push(track);
    }
    edit(id: number, track: Track): Track {
       var targetIndex = this.vinylList.findIndex((track => track.Id == id));
      
       this.vinylList[targetIndex].Artist= track.Artist;
       this.vinylList[targetIndex].Title= track.Title;
       this.vinylList[targetIndex].Duration= track.Duration;

       return this.vinylList[targetIndex];
       
    }
    delete(id: number): Track {
       var targetIndex = this.vinylList.findIndex((track => track.Id == id));
        if (targetIndex < -1) return null;
        return this.vinylList.splice(targetIndex, 1)[0];
    }

}