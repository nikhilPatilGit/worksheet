import { GetWidgetConverterFromType, textWidgetConverter } from "src/converters/WidgetConverter";
import { Widget } from "src/modals/Widget";
import { storeDocumentInCollection } from "./firebase";

export const addWidget = async (widget: Widget, sheetId: string) : Promise<void> => {
    const collectionPath: string = `sheets/${sheetId}/widgets`;
    const docId: string = widget.widgetId;

    try {
        storeDocumentInCollection(collectionPath, docId, widget, GetWidgetConverterFromType(widget.widgetType));
    } catch (error) {
        throw new Error(`Add widget failed : ${error}`);
    }
}