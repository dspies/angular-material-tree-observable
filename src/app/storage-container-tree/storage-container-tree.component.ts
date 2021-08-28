import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { FileNode } from './file-node';
import { FileNodeService } from './file-node.service';

@Component({
  selector: 'lab-storage-container-tree',
  templateUrl: './storage-container-tree.component.html',
  styleUrls: ['./storage-container-tree.component.css']
})
export class StorageContainerTreeComponent {
  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;

  constructor(private service: FileNodeService) {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    service.storageContainers.subscribe(data => this.nestedDataSource.data = data);
    service.initialize();
  }

  private _getChildren = (node: FileNode) => {
    return this.service.getChildStorageContainers(node);
  };

  hasNestedChild = (_: number, node: FileNode) => {
    return !node.type;
  };
}
