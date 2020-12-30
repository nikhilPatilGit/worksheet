import { Reducer } from "react";
import { ActionType, DocumentAction, SheetIndex } from "./Types";
import { DocumentState } from "./DocumentState";
import { Sheet } from "./Model";
import { MapActionState } from "./Types";
import { TextWidget } from "src/component/Widget/Model";
import { createGenericObject, isSheet, isSheetArray } from "src/helper/TypeChecks";
import { ErrorMessageWrongType } from "src/helper/Error";
import { list } from "@chakra-ui/react";
import { stat } from "fs";

const updateObject = (oldState: DocumentState, newValues: DocumentState): DocumentState => {
  return Object.assign({}, oldState, newValues);
};

const addWidget = (
  state: DocumentState,
  action: DocumentAction
): DocumentState => {
  return updateObject(state, { status: true });
};

const deleteSheet = (state: DocumentState, action: DocumentAction) => {
  const sheetId: string = action.result as string;
  const sheet: Sheet[] = state.sheet;
  sheet.forEach((value: Sheet, index: number) => {
    if(value.sheetId === sheetId){
      sheet.splice(index,1);    
    }
  });
  return updateObject(state, {sheet: sheet});
}

const addNewSheet = (state: DocumentState, action: DocumentAction): DocumentState => {
  const newSheet: SheetIndex = action.result as SheetIndex;  
  if(!isSheet(newSheet.sheet)){
    throw ErrorMessageWrongType("Sheet");
  }

  let sheet: Sheet[] = state.sheet;
  sheet.splice(newSheet.index,0, newSheet.sheet);
  
  return updateObject(state, {sheet: sheet});
};

const addSheetArray = (state: DocumentState, action: DocumentAction): DocumentState => {
  const sheet: Sheet[] = action.result as Sheet[];  
  if(!isSheetArray(sheet)){
    throw ErrorMessageWrongType("Sheet[]");
  }
  return updateObject(state, {sheet: sheet});
};

const documentActionLookUpTable = (
  state: DocumentState,
  action: DocumentAction,
  map: MapActionState
) => (map.has(action.type) ? map.get(action.type)(state, action) : state);

export const DocumentReducer: Reducer<DocumentState, DocumentAction> = (
  documentState: DocumentState,
  documentAction: DocumentAction
) => {
  let map: MapActionState = new Map([
    [ActionType.AddWidget, addWidget],
    [ActionType.AddNewSheet, addNewSheet],
    [ActionType.AddSheetArray, addSheetArray],
    [ActionType.DeleteSheet, deleteSheet],
  ]);
  return documentActionLookUpTable(
    { ...documentState },
    documentAction,
    map
  );
};
