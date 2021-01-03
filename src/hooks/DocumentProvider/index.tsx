import { createContext } from "react";
import { Context } from "react";
import { FC, useReducer, Reducer } from "react";
import { TextWidget, WidgetType } from "src/component/Widget/Model";
import { DocumentAction } from "./Action";
import { DocumentReducer } from "./DocumentReducer";
import { DocumentState } from "./DocumentState";
import { Sheet } from "./Model";

export const DocumentStateContext: Context<DocumentState> = createContext({});
export const DocumentReducerContext = createContext(
  (() => 0) as React.Dispatch<DocumentAction>
);

export const DocumentProvider: FC = ({ children }) => {
  let sheet = new Sheet();
  sheet.sheetId = "123";
  sheet.widgets = [new TextWidget(WidgetType.TextWidget)];
  const initialState: DocumentState =  {currentSheetId: "123", sheets: [sheet, sheet]};
  const [state, dispatch] = useReducer<Reducer<DocumentState, DocumentAction>>(
    DocumentReducer,
    initialState
  );

  return (
    <DocumentReducerContext.Provider value={dispatch}>
      <DocumentStateContext.Provider value={state}>
        {children}
      </DocumentStateContext.Provider>
    </DocumentReducerContext.Provider>
  );
};