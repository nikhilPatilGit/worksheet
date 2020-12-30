import { Reducer } from "react";
import { ActionType, DocumentAction, NewSheet } from "./Types";
import { DocumentState } from "./DocumentState";
import { Sheet } from "./Model";
import { MapActionState } from "./Types";
import { TextWidget } from "src/component/Widget/Model";
import { createGenericObject, isSheet, isSheetArray } from "src/helper/TypeChecks";
import { ErrorMessageWrongType } from "src/helper/Error";
import { list } from "@chakra-ui/react";

const updateObject = (oldState: DocumentState, newValues: DocumentState): DocumentState => {
  return Object.assign({}, oldState, newValues);
};

const addWidget = (
  state: DocumentState,
  action: DocumentAction
): DocumentState => {
  return updateObject(state, { status: true });
};

const addNewSheet = (state: DocumentState, action: DocumentAction): DocumentState => {
  const newSheet: NewSheet = action.result as NewSheet;  
  if(!isSheet(newSheet.result)){
    throw ErrorMessageWrongType("Sheet");
  }

  let sheet: Sheet[] = state.sheet;
  sheet.splice(newSheet.index,0, newSheet.result);
  
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
  ]);
  return documentActionLookUpTable(
    { ...documentState },
    documentAction,
    map
  );
};
