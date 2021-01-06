import { isUrlValid } from "src/util/Validations";
import { Widget } from "src/component/Widget/Model";

export class Sheet {
  private _sheetId: string;
  private _sheetUrl: string;
  private _widgets: Widget[];

  get sheetId(): string {
    return this._sheetId;
  }

  set sheetId(sheetId: string) {
    this._sheetId = sheetId;
  }

  get sheetUrl(): string {
    return this._sheetUrl;
  }

  set sheetUrl(sheetUrl: string) {
    if (sheetUrl && !isUrlValid(sheetUrl)) {
      throw new Error(`Invalid URL -> ${sheetUrl}`);
    }

    this._sheetUrl = sheetUrl;
  }

  get widgets(): Widget[]{
      return this._widgets;
  }

  set widgets(widgets: Widget[]){
      this._widgets = widgets;
  }
}

export class SheetIndex extends Sheet {
  private _index: number;
  
  public get index() : number {
    return this._index;
  }  
}