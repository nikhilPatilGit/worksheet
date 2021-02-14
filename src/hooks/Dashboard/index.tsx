import { Context, createContext, FC, Reducer, useReducer } from "react";
import { Action, ActionResult } from "../Common/Action";
import { ActionType } from "../Common/Types";

export type DashState = {
    modalState: number;
    currentDocumentId?: string;
};

export const InitialDashState: DashState = {
    modalState: 0
};

export const DashReducer: Reducer<DashState, Action> = (
    dashState: DashState,
    dashAction: Action
) => {
    switch (dashAction.actionType) {
        case ActionType.ShowDashSpinner:
            return { ...dashState, modalState: 1 };
        case ActionType.ShowDashDetailForm:
            return { ...dashState, modalState: 2 };
        case ActionType.ResetDashModal:
            return {...dashState, modalState: 0};
        case ActionType.SetCurrentDocumentId:
            let actionResult: ActionResult<string> = dashAction as ActionResult<string>;
            return {...dashState, currentDocumentId: actionResult.result, modalState: 2}    
        default:
            return dashState;
    }
}

export const DashStateContext: Context<DashState> = createContext(InitialDashState);
export const DashReducerContext = createContext(
    (() => 0) as React.Dispatch<Action>
);

export const DashProvider: FC = ({ children }) => {

    const [state, dispatch] = useReducer<Reducer<DashState, Action>>(
        DashReducer,
        InitialDashState
    );

    return (<DashReducerContext.Provider value={dispatch}>
        <DashStateContext.Provider value={state}>
            {children}
        </DashStateContext.Provider>
    </DashReducerContext.Provider>);

}