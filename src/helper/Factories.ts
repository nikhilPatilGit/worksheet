import { ImageWidget, TextWidget, Widget, WidgetType } from "src/component/Widget/Model";
import { ErrorMessage, ErrorMessageWrongType } from "./Error";

export const createGenericObject = <T>(c: { new (): T }): T => {
  return new c();
};

export const createWidgetObject = <T extends Widget>(
  widget: new (widgetType: WidgetType) => T,
  arg: WidgetType
): T => {
  return new widget(arg);
};

export const WidgetFactory = (widgetType: WidgetType): Widget => {
    switch (widgetType) {
        case WidgetType.TextWidget:
            return createWidgetObject(TextWidget, WidgetType.TextWidget);
        case WidgetType.ImageWidget:
            return createWidgetObject(ImageWidget, WidgetType.ImageWidget);
        default:
            throw ErrorMessage(`No factory mapping for widget type ${widgetType} found`);
    }
}


