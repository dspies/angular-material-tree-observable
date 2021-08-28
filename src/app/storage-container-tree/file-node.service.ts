import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { FileNode } from "./file-node";

const FILE_NODES = [
  {
    filename: 'folder',
    type: '',
    children: []
  },
  {
    filename: 'test2',
    type: 'exe',
    children: []
  }
]

@Injectable()
export class FileNodeService {

  private idx: number = 0;
  private _storageContainers: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);
  public readonly storageContainers: Observable<FileNode[]> = this._storageContainers.asObservable();

  constructor(){
  }

  initialize(): void {
    this._storageContainers.next(FILE_NODES);
  }

  getChildStorageContainers(node: FileNode): Observable<FileNode[]> {
    console.log(node);
    return of([
      {
        filename: 'test3',
        type: 'exe',
        children: []
      },
      {
        filename: 'test' + this.idx++,
        type: '',
        children: []
      }
    ]);
  }

}