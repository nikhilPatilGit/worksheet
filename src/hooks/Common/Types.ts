import { DocumentState } from "../DocumentProvider/DocumentState";
import { SheetIndex } from "../../modals/SheetIndex";
import { Sheet } from "../../modals/Sheet";
import {Action} from "./Action";
import {AuthState} from "../Auth/AuthState";

export type MapDocumentActionState = Map<
  ActionType,
  (state: DocumentState, action: Action) => DocumentState
>;

export type MapAuthActionState = Map<
    ActionType,
    (state: AuthState, action: Action) => AuthState
    >;

export enum ActionType {
  AddNewSheet,
  AddSheetArray,
  AddWidget,
  DeleteSheet,
  DeleteWidget,
  UpdatePosition,
  UpdateTextWidget,
  SetUser,
  SetAuthStatus,
  SignIn,
  SignOut,
  UpdateUser,
  ErrorThrown
};

// export type DocumentAction =
// | {
//   type: ActionType.UpdatePosition;
//   result: UpdateWidgetPosition;
// }
//   | {
//       type: ActionType.AddWidget;
//       result: Widget;
//     }
//   | {
//       type: ActionType.DeleteWidget;
//       result: string;
//     }
//   | {
//       type: ActionType.AddNewSheet;
//       result: SheetIndex;
//     }
//   | {
//       type: ActionType.DeleteSheet;
//       result: string;
//     }
//   | {
//       type: ActionType.AddSheetArray;
//       result: Sheet[];
//     };
