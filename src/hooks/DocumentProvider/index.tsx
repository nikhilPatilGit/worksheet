import React, { createContext } from "react";
import { Context } from "react";
import { FC, useReducer, Reducer } from "react";
import { initialDocumentState } from "src/util/DummyData";
import { Action } from "../Common/Action";
import { DocumentReducer } from "./DocumentReducer";
import { DocumentState } from "./DocumentState";

export const DocumentStateContext: Context<DocumentState> = createContext({});
export const DocumentReducerContext = createContext(
  (() => 0) as React.Dispatch<Action>
);

export const DocumentProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<DocumentState, Action>>(
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