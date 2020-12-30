import { Sheet } from "src/hooks/DocumentProvider/Model";
var _ = require("lodash");
import lodash from "lodash";

export const createGenericObject = <T>(c: { new (): T }): T => {
    return new c();
  }

export const typeCheckArray = (type: Object, array: Object[]): boolean => {
    array.forEach((obj: Object) => {
        lodash.keysIn(type).forEach((key) => {
            if (!lodash.hasIn(obj, key)) {
              return false;
            }
          });
    });
    return true;
};



export const isSheetArray = (sheet: Sheet[]): boolean => {
    return typeCheckArray(createGenericObject(Sheet), sheet);
};
