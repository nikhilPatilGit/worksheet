import { Sheet } from "./Model";

export type DocumentState = {
  currentSheetId?: string;
  sheets?: Sheet[];
  status?: boolean;
};
