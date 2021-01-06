// import { createContext } from "react";
// import { TextWidget, Widget } from "../component/Widget/Model";

// export const WidgetToJson = <Widget>(widgetObject: Widget): string => {
//   return JSON.stringify(widgetObject).replace("_", "");
// };

// export const JsonToWidget = (jsonString: string): Widget => {
//   const widget: Widget = JSON.parse(jsonString);
//   if (hasOwnProperty(widget, "widgetType")) {
//     switch (widget.widgetType) {
//       case "TextWidget":
//         return new TextWidget();
//       case "ImageWidget":
//         return new TextWidget();
//       default:
//         break;
//     }
//   }
// };

// export const hasOwnProperty = <X extends {}, Y extends PropertyKey>(
//   obj: X,
//   prop: Y
// ): obj is X & Record<Y, unknown> => {
//   return obj.hasOwnProperty(prop);
// };
