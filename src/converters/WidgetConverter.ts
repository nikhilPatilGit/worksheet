import {
  DocumentData,
  DocumentSnapshot,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  QuerySnapshot,
  SetOptions,
  SnapshotOptions,
} from "@firebase/firestore-types";
import { db } from "src/config/firebase";
import { Sheet } from "src/modals/Sheet";
import { TextWidget, Widget, WidgetType } from "src/modals/Widget";

export const GetWidgetConverterFromType = (
  widgetType: WidgetType
): FirestoreDataConverter<Widget> => {
  switch (widgetType) {
    case WidgetType.TextWidget:
      return textWidgetConverter;
    default:
      break;
  }
};

export const textWidgetConverter: FirestoreDataConverter<TextWidget> = {
  toFirestore(widget: TextWidget): DocumentData {
    return {
      type: widget.widgetType,
      inputText: widget.inputText,
      position: { x: widget.position.x, y: widget.position.y },
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): TextWidget {
    const data = snapshot.data(options)!;
    let textWidget = new TextWidget();
    textWidget.widgetId = snapshot.id;
    textWidget.widgetType = data.type;
    textWidget.inputText = data.inputText;
    textWidget.position = data.position;
    return textWidget;
  },
};
