import { createContext } from "react";
import { Context } from "react";
import { FC, useReducer, Reducer } from "react";
import { DocumentAction } from "./DocumentAction";
import { DocumentReducer } from "./DocumentReducer";
import { DocumentState } from "./DocumentState";

export const DocumentStateContext: Context<DocumentState> = createContext({});
export const DocumentReducerContext = createContext(
  (() => 0) as React.Dispatch<DocumentAction>
);

export const DocumentProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<DocumentState, DocumentAction>>(
    DocumentReducer,
    {}
  );

  return (
    <DocumentReducerContext.Provider value={dispatch}>
      <DocumentStateContext.Provider value={state}>
        {children}
      </DocumentStateContext.Provider>
    </DocumentReducerContext.Provider>
  );
};