import { Sheet } from "src/hooks/DocumentProvider/Model";
import { createGenericObject } from "./TypeChecks";

export const ErrorMessageWrongType = (type: string): Error => {
    return new Error(`Wrong object type, expected type is ${type}`);
};