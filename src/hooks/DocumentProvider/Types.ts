import { Widget } from "src/component/Widget/Model";
import { UpdateWidgetPosition } from "src/modals/Widget";
import { DocumentAction } from "./Action";
import { DocumentState } from "./DocumentState";
import { SheetIndex } from "../../modals/SheetIndex";
import { Sheet } from "../../modals/Sheet";

export type MapActionState = Map<
  ActionType,
  (state: DocumentState, action: DocumentAction) => DocumentState
>;

export enum ActionType {
  AddNewSheet,
  AddSheetArray,
  AddWidget,
  DeleteSheet,
  DeleteWidget,
  UpdatePosition,
  UpdateTextWidget
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
