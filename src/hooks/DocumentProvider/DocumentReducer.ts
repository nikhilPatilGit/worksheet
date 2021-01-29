import { Reducer } from "react";
import { ActionType } from "../Common/Types";
import { DocumentState } from "./DocumentState";
import { SheetIndex } from "../../modals/SheetIndex";
import { Sheet } from "../../modals/Sheet";
import { MapDocumentActionState } from "../Common/Types";
import {
  isSheet,
  isSheetArray,
  isWidget,
  Optional,
} from "src/helper/TypeChecks";
import { ErrorMessageWrongType } from "src/helper/Error";
import { ActionResult, Action } from "../Common/Action";
import { UpdateWidgetPosition } from "src/modals/UpdateWidgetPosition";
import { Widget, TextWidget } from "src/modals/Widget";

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

export const addWidget = (
  state: DocumentState,
  action: Action
): DocumentState => {
  const actionResult: ActionResult<Widget> = action as ActionResult<Widget>;
  if (!(actionResult.result instanceof Widget)) {
    throw ErrorMessageWrongType("Widget");
  }
  if (Optional(state.sheets) && Optional(state.currentSheetId)) {
    const sheets: Sheet[] = updateItemInSheets(
      state.sheets,
      state.currentSheetId,
      (sheet: Sheet) => {
        sheet.widgets.push(actionResult.result);
        return sheet;
      }
    );
    return updateObject(state, { sheets: sheets });
  }
  return state;
};


const updateWidgetPostion = (
  state: DocumentState,
  action: Action
): DocumentState => {
  const actionResult: ActionResult<UpdateWidgetPosition> = action as ActionResult<UpdateWidgetPosition>;
  if (!(actionResult.result instanceof UpdateWidgetPosition)) {
    throw ErrorMessageWrongType("UpdateWidgetPosition");
  }
  if (Optional(state.sheets) && Optional(state.currentSheetId)) {
    const sheets: Sheet[] = updateItemInSheets(
      state.sheets,
      state.currentSheetId,
      (sheet: Sheet) => {
        const widgets: Widget[] = updateItemInWidgets(sheet.widgets, actionResult.result.widgetId, (widget: Widget)=>{
          widget.position = actionResult.result.postion;  
          return widget;
        });
        sheet.widgets = widgets;
        return sheet;
      }
    );
    return updateObject(state, { sheets: sheets });
  }
  return state;
}

const deleteWidget = (state: DocumentState, action: Action) => {
  const actionResult: ActionResult<string> = action as ActionResult<string>;
  const widgetId: string = actionResult.result;
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

const deleteSheet = (state: DocumentState, action: Action) => {
  const actionResult: ActionResult<string> = action as ActionResult<string>;
  const sheetId: string = actionResult.result;
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
  action: Action
): DocumentState => {
  const actionResult: ActionResult<SheetIndex> = action as ActionResult<SheetIndex>;
  if (!isSheet(actionResult.result)) {
    throw ErrorMessageWrongType("Sheet");
  }

  let sheet: Sheet[] = state.sheets;
  sheet.splice(actionResult.result.index, 0, actionResult.result);

  return updateObject(state, { sheets: sheet });
};

const addSheetArray = (
  state: DocumentState,
  action: Action
): DocumentState => {
  const actionResult: ActionResult<Sheet[]> = action as ActionResult<Sheet[]>;
  if (!isSheetArray(actionResult.result)) {
    throw ErrorMessageWrongType("Sheet[]");
  }
  return updateObject(state, { sheets: actionResult.result });
};

const updateTextWidget = (state: DocumentState, action: Action): DocumentState => {
  const actionResult: ActionResult<TextWidget> = action as ActionResult<TextWidget>;
  if(!(actionResult.result instanceof TextWidget)){
    throw ErrorMessageWrongType("TextWidget");
  }

  if (Optional(state.sheets) && Optional(state.currentSheetId)) {
    const sheets: Sheet[] = updateItemInSheets(
      state.sheets,
      state.currentSheetId,
      (sheet: Sheet) => {
        const widgets: Widget[] = updateItemInWidgets(sheet.widgets, actionResult.result.widgetId, (widget: Widget)=>{
          widget = actionResult.result;  
          return widget;
        });
        sheet.widgets = widgets;
        return sheet;
      }
    );
    return updateObject(state, { sheets: sheets });
  }

  return state;
}

export const DocumentReducer: Reducer<DocumentState, Action> = (
  documentState: DocumentState,
  documentAction: Action
) => {
  let map: MapDocumentActionState = new Map([
    [ActionType.AddWidget, addWidget],
    [ActionType.AddNewSheet, addNewSheet],
    [ActionType.AddSheetArray, addSheetArray],
    [ActionType.DeleteSheet, deleteSheet],
    [ActionType.DeleteWidget, deleteWidget],
    [ActionType.UpdatePosition, updateWidgetPostion],
    [ActionType.UpdateTextWidget, updateTextWidget]
  ]);
  return (map.has(documentAction.actionType) ? map.get(documentAction.actionType)(documentState, documentAction) : documentState);
};
 