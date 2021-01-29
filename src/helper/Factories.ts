
import { ActionResult, Action } from "src/hooks/Common/Action";
import { ActionType } from "src/hooks/Common/Types";
import { Widget, WidgetType, TextWidget, ImageWidget } from "src/modals/Widget";
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

export const createActionResult = <T>(actionResult: ActionType, result?: T): Action => {
  return new ActionResult<T>(actionResult, result);
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


