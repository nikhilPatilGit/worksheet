import { Sheet } from "src/modals/Sheet";
var _ = require("lodash");
import lodash from "lodash";
import {
  createGenericObject,
  createWidgetObject,
  WidgetFactory,
} from "./Factories";
import { Widget } from "src/modals/Widget";

export const typeCheckObjectArray = (
  type: Object,
  array: Object[]
): boolean => {
  array.forEach((obj: Object) => {
    lodash.keysIn(type).forEach((key) => {
      if (!lodash.hasIn(obj, key)) {
        return false;
      }
    });
  });
  return true;
};

export const typeCheckObject = (type: Object, object: Object): boolean => {
  let typeKeys = lodash.keysIn(type);
  for (let index = 0; index < typeKeys.length; index++) {
    if (!lodash.hasIn(object, typeKeys[index])) {
      return false;
    }    
  }
  return true;
};

export const isObjectKeyPresent = (type: Object, object: Object): boolean => {
  let objectKeys = lodash.keysIn(object);
  for (let index = 0; index < objectKeys.length; index++) {
    if (!lodash.hasIn(type, objectKeys[index])) {
      return false;
    }    
  }
  return true;
};

export const isSheetArray = (sheet: Sheet[]): boolean => {
  return typeCheckObjectArray(createGenericObject(Sheet), sheet);
};

export const isSheet = (sheet: Sheet): boolean => {
  return typeCheckObject(createGenericObject(Sheet), sheet);
};

export const isWidget = (widget: Widget): boolean => {
  return typeCheckObject(WidgetFactory(widget.widgetType), widget);
};

export const Optional = <T>(optional: T): boolean => {
  return typeof optional !== "undefined";
};
