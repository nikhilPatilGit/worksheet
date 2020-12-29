import { Sheet } from "./Model";

export type DocumentState = {
  currentSheetId?: string;
  sheet?: Sheet[];
  status?: boolean;
};
