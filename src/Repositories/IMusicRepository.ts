import { Track } from "../Models/Track";


export interface IMusicRepository {
     get() : Track[];
     getById(id: number) : Track;
     add(track: Track) : number;
     edit(id: number, track: Track) : Track;
     delete(id: number) : Track;
}