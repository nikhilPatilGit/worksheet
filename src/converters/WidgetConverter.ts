import { Widget, WidgetType } from "src/component/Widget/Model";

export const GetWidgetFromType = (widgetType: WidgetType): Widget => {
    switch (widgetType) {
        case WidgetType.TextWidget:
            return  
        default:
            break;
    }
}