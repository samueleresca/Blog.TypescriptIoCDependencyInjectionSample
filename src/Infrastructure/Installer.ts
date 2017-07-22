import "reflect-metadata";
import { Container } from "inversify";

import SERVICE_IDENTIFIER from "../Constants/Identifiers";
import {IMusicRepository} from "../Repositories/IMusicRepository";
import {VinylCatalog} from "../Repositories/VinylCatalog";

let container = new Container();
container.bind<IMusicRepository>(SERVICE_IDENTIFIER.IMusicRepository).to(VinylCatalog);

export default container;
