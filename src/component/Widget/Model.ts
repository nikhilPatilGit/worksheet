import { JsonProperty } from "json-typescript-mapper";
import { isUrlValid } from "../util/Validations";

// export type WidgetType =
//   | "TextWidget"
//   | "MCQWidget"
//   | "ImageWidget"
//   | "VideoWidget";

export enum WidgetType {
  MCQWidget,
  ImageWidget,
  VideoWidget,
  TextWidget
}

export abstract class Widget { 
  private _thumbUrl: string;
  
  constructor(public widgetType: WidgetType) {
    this.widgetType = widgetType;
  }

  get thumbUrl(): string {
    return this._thumbUrl;
  }

  set thumbUrl(thumbUrl: string) {
    if (thumbUrl && !isUrlValid(thumbUrl)) {
      throw new Error(`Invalid URL -> ${thumbUrl}`);
    }

    this._thumbUrl = thumbUrl;
  }

}

export class TextWidget extends Widget {
  private _inputText: string;  
  private _correctAnswer: string; 

  constructor(widgetType: WidgetType) {
    super(widgetType);
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
    super(widgetType);
  }

  get url(): string {
      return this._url;
  }
  
  set url(url: string) {
      this._url = url;
  }
}