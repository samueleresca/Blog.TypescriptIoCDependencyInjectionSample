import {IMusicRepository} from "./Repositories/IMusicRepository";
import container from "./Infrastructure/Installer";
import SERVICE_IDENTIFIER from "./Constants/Identifiers";
import { MusicCatalogService } from '../src/Services/MusicCatalogService';


// Composition root
let musicRepoo = container.get<IMusicRepository>(SERVICE_IDENTIFIER.IMusicRepository);
let service= new MusicCatalogService(musicRepoo);

console.log(service.get());

