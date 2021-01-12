import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "@firebase/firestore-types";
import { Sheet } from "src/modals/Sheet";

export const SheetConverter: FirestoreDataConverter<Sheet> = {
  toFirestore(sheet: Sheet): DocumentData {
    return {
        id: sheet.sheetId,
        url: sheet.sheetUrl,
        widgets: sheet.widgets
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Sheet {
    const data = snapshot.data(options)!;
    let sheet: Sheet = new Sheet();
    sheet.sheetId = snapshot.id;
    sheet.sheetUrl = data.url;
    sheet.widgets = data.widgets;
    return sheet;
  },
};
