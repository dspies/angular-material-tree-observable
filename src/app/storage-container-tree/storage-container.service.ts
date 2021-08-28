import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { StorageContainer } from "./storage-container";

const STORAGE_CONTAINERS = [

];

@Injectable()
export class StorageContainerService {

  get(containerId: string): Observable<StorageContainer> {
    return of(new StorageContainer());
  }

}