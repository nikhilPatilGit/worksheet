import { Sheet } from "./Sheet";


export class SheetIndex extends Sheet {
  private _index: number;

  public get index(): number {
    return this._index;
  }
}
