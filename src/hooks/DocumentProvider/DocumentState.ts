import { Sheet } from "../../modals/Sheet";

export type DocumentState = {
  currentSheetId?: string;
  sheets?: Sheet[];
  status?: boolean;
};
