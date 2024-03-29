import { DocumentState } from "src/hooks/DocumentProvider/DocumentState";
import { Sheet } from "src/modals/Sheet";
import { Position } from "src/modals/Position";
import { TextWidget, ImageWidget } from "src/modals/Widget";
import {User} from "../modals/User";

export const initialDocumentState = (): DocumentState => {

  let textWidget = new TextWidget();
  textWidget.inputText = "Nikhil Patil";
  textWidget.correctAnswer = "Name";
  textWidget.position = new Position(30, 30);

  let textWidget2 = new TextWidget();
  textWidget2.inputText = "Nikhil Patil";
  textWidget2.correctAnswer = "Name";
  textWidget2.position = new Position(80, 80);
  
  let imageWidget = new ImageWidget();
  imageWidget.position = new Position(60, 60);
  
  let sheet1 = new Sheet();
  sheet1.sheetId = "abc";
  sheet1.sheetUrl = "https://bit.ly/sage-adebayo";
  sheet1.widgets = [textWidget, textWidget2];

  let sheet2 = new Sheet();
  sheet2.sheetId = "def";
  sheet2.sheetUrl = "https://bit.ly/sage-adebayo";
  sheet2.widgets = [textWidget, textWidget2];

  return {
      sheets: [sheet1, sheet2],
      currentSheetId: "abc"
  };
}

export const DummyUser: User = new User("10101", "Nikhil", "patil@gmail.com", "");