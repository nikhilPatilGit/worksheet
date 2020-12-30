import { Sheet } from "src/hooks/DocumentProvider/Model";
var _ = require("lodash");
import lodash from "lodash";

export const createGenericObject = <T>(c: { new (): T }): T => {
    return new c();
  }

export const typeCheckObjectArray = (type: Object, array: Object[]): boolean => {
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
  lodash.keysIn(type).forEach((key) => {
    if (!lodash.hasIn(object, key)) {
      return false;
    }
  });
  return true;
};

export const isSheetArray = (sheet: Sheet[]): boolean => {
    return typeCheckObjectArray(createGenericObject(Sheet), sheet);
};

export const isSheet = (sheet: Sheet): boolean => {
  return typeCheckObject(createGenericObject(Sheet), sheet);
};
