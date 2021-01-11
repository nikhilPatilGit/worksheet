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

export const GetWidgetFromType = (widgetType: WidgetType): Widget => {
  switch (widgetType) {
    case WidgetType.TextWidget:
      return;
    default:
      break;
  }
};

export const textWidgetConverter: FirestoreDataConverter<TextWidget> = {
  toFirestore(widget: TextWidget): DocumentData {
    return {
      id: widget.widgetId,
      type: widget.widgetType,
      inputText: widget.inputText,
      x: widget.position.x,
      y: widget.position.y,
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): TextWidget {
    const data = snapshot.data(options)!;
    console.log(data);
    let textWidget = new TextWidget();
    textWidget.widgetId = data.id;
    textWidget.widgetType = data.type;
    textWidget.inputText = data.inputText;
    textWidget.position = data.position;
    return textWidget;
  },
};



export const testWidgetConverter = async (textWidget: TextWidget) => {
  let documentData = textWidgetConverter.toFirestore(textWidget);

  const textWidgetSnap = await db
    .collection("sheets/sheet-id-1/widgets")
    .doc()
    .withConverter(textWidgetConverter)
    .set(textWidget)
    .then(() => console.log("successfully written"))
    .catch((error) => console.log(error));

  // const tw = textWidgetSnap.data();
  // if (tw !== undefined) {
  //   console.log(tw);
  // }
};
