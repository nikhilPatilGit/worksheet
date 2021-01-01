import { Reducer } from "react";
import { ActionType, DocumentAction, SheetIndex } from "./Types";
import { DocumentState } from "./DocumentState";
import { Sheet } from "./Model";
import { MapActionState } from "./Types";
import {
  isSheet,
  isSheetArray,
  isWidget,
  Optional,
} from "src/helper/TypeChecks";
import { ErrorMessageWrongType } from "src/helper/Error";
import { TextWidget, Widget } from "src/component/Widget/Model";

const updateObject = (
  oldState: DocumentState,
  newValues: DocumentState
): DocumentState => {
  return Object.assign({}, oldState, newValues);
};

function updateItemInSheets(
  array: Sheet[],
  itemId: string,
  updateItemCallback: (item: Sheet) => Sheet
) {
  const updatedItems: Sheet[] = array.map((item) => {
    if (item.sheetId !== itemId) {
      return item;
    }

    return updateItemCallback(item);
  });

  return updatedItems;
}

function updateItemInWidgets(
  array: Widget[],
  itemId: string,
  updateItemCallback: (item: Widget) => Widget
) {
  const updatedItems: Widget[] = array.map((item) => {
    if (item.widgetId !== itemId) {
      return item;
    }

    return updateItemCallback(item);
  });

  return updatedItems;
}

const addWidget = (
  state: DocumentState,
  action: DocumentAction
): DocumentState => {
  const widget: Widget = action.result as Widget;
  if (!isWidget(widget)) {
    throw ErrorMessageWrongType("Widget");
  }
  if (Optional(state.sheets) && Optional(state.currentSheetId)) {
    const sheets: Sheet[] = updateItemInSheets(
      state.sheets,
      state.currentSheetId,
      (sheet: Sheet) => {
        sheet.widgets.push(widget);
        return sheet;
      }
    );
    return updateObject(state, { sheets: sheets });
  }
  return state;
};

const deleteWidget = (state: DocumentState, action: DocumentAction) => {
  const widgetId: string = action.result as string;
  if (Optional(state.sheets) && Optional(state.currentSheetId)) {
    const sheets: Sheet[] = updateItemInSheets(
      state.sheets,
      state.currentSheetId,
      (sheet: Sheet) => {
        const widgets: Widget[] = sheet.widgets.map((widget) => {
          if (widget.widgetId != widgetId) {
            return widget;
          }
        });
        sheet.widgets = widgets;

        return sheet;
      }
    );
    return updateObject(state, { sheets: sheets });
  }
};

const deleteSheet = (state: DocumentState, action: DocumentAction) => {
  const sheetId: string = action.result as string;
  const sheet: Sheet[] = state.sheets;
  sheet.forEach((value: Sheet, index: number) => {
    if (value.sheetId === sheetId) {
      sheet.splice(index, 1);
    }
  });
  return updateObject(state, { sheets: sheet });
};

const addNewSheet = (
  state: DocumentState,
  action: DocumentAction
): DocumentState => {
  const newSheet: SheetIndex = action.result as SheetIndex;
  if (!isSheet(newSheet.sheet)) {
    throw ErrorMessageWrongType("Sheet");
  }

  let sheet: Sheet[] = state.sheets;
  sheet.splice(newSheet.index, 0, newSheet.sheet);

  return updateObject(state, { sheets: sheet });
};

const addSheetArray = (
  state: DocumentState,
  action: DocumentAction
): DocumentState => {
  const sheet: Sheet[] = action.result as Sheet[];
  if (!isSheetArray(sheet)) {
    throw ErrorMessageWrongType("Sheet[]");
  }
  return updateObject(state, { sheets: sheet });
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
    [ActionType.DeleteWidget, deleteWidget],
  ]);
  return documentActionLookUpTable({ ...documentState }, documentAction, map);
};
