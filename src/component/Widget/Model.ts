import { JsonProperty } from "json-typescript-mapper";
import { isUrlValid } from "../util/Validations";
import { v4 as uuidv4 } from "uuid";
import { Position } from "src/modals/Widget";


export enum WidgetType {
  MCQWidget,
  ImageWidget,
  VideoWidget,
  TextWidget
}

export abstract class Widget { 
  private _widgetId: string;
  private _widgetType: WidgetType;
  private _position: Position;
  
  constructor(widgetId: string, widgetType: WidgetType) {
    this._widgetId = widgetId
    this._widgetType = widgetType;
  }

  get widgetType(): WidgetType {
    return this._widgetType;
  }

  get widgetId(): string {
    return this._widgetId;
  }

  get position():Position {
    return this._position;
  }

  set position(position: Position) {
    this._position = position;
  }
}

export class TextWidget extends Widget {
  private _inputText: string;  
  private _correctAnswer: string; 

  constructor(widgetType: WidgetType) {
    super(uuidv4(), widgetType);
  }

  get inputText(): string {
      return this._inputText;
  }
  
  set inputText(text: string) {
      this._inputText = text;
  }

  get correctAnswer(): string {
      return this._correctAnswer;
  }

  set correctAnswer(answer: string) {
      this._correctAnswer = answer;
  }
}

export class ImageWidget extends Widget {
  private _url: string;  

  constructor(widgetType: WidgetType) {
    super(uuidv4(), widgetType);
  }

  get url(): string {
      return this._url;
  }
  
  set url(url: string) {
      this._url = url;
  }
}