import { Reducer } from "react";
import { DocumentAction } from "./Types";
import { DocumentState } from "./DocumentState";
import { Sheet } from "./Model";
import { MapActionState } from "./Types";
import { TextWidget } from "src/component/Widget/Model";
import { createGenericObject, isSheetArray, typeCheckArray } from "src/helper/TypeChecks";
import { ErrorMessageWrongType } from "src/helper/Error";

const updateObject = (oldState: DocumentState, newValues: DocumentState): DocumentState => {
  return Object.assign({}, oldState, newValues);
};

const addWidget = (
  state: DocumentState,
  action: DocumentAction
): DocumentState => {
  return updateObject(state, { status: true });
};

const addSheet = (state: DocumentState, action: DocumentAction): DocumentState => {
  const sheet: Sheet[] = action.result as Sheet[];  
  if(isSheetArray(sheet)){
    throw ErrorMessageWrongType("Sheet");
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
  return documentActionLookUpTable(
    { ...documentState },
    documentAction,
    new Map([
      ["AddWidget", addWidget],
      ["AddSheet", addSheet],
    ])
  );
};
