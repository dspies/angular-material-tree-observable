export class StorageContainer {
  id: string;
  name: string;
  fullPath: string;
  capacity: number;
  rows: number;
  columns: number;
  immutable: boolean;
  columnIndex: number;
  rowIndex: number;
  topLevel: boolean;
  allowsSamples: boolean;
  samplePositions?: any[]; // SampleContainer[];
  barcode?: string;
  containerPositions?: StorageContainer[];
}