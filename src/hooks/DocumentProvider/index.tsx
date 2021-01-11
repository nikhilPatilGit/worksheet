import { createContext } from "react";
import { Context } from "react";
import { FC, useReducer, Reducer } from "react";
import { TextWidget, WidgetType } from "src/component/Widget/Model";
import { initialDocumentState } from "src/util/DummyData";
import { DocumentAction } from "./Action";
import { DocumentReducer } from "./DocumentReducer";
import { DocumentState } from "./DocumentState";
import { Sheet } from "../../modals/Sheet";

export const DocumentStateContext: Context<DocumentState> = createContext({});
export const DocumentReducerContext = createContext(
  (() => 0) as React.Dispatch<DocumentAction>
);

export const DocumentProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<DocumentState, DocumentAction>>(
    DocumentReducer,
    initialDocumentState()
  );

  return (
    <DocumentReducerContext.Provider value={dispatch}>
      <DocumentStateContext.Provider value={state}>
        {children}
      </DocumentStateContext.Provider>
    </DocumentReducerContext.Provider>
  );
};