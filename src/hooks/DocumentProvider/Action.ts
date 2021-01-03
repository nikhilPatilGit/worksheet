import { Widget } from "src/component/Widget/Model";
import { ActionType } from "./Types";

export abstract class DocumentAction {
    private _actionType: ActionType
    constructor(actionType: ActionType){
      this._actionType = actionType;
    }
    get actionType(): ActionType{
      return this._actionType;
    }
};

export class ActionResult<T> extends DocumentAction{
    private _result: T;
    constructor(actionType: ActionType, result: T){
      super(actionType);
      this._result = result;
    }
    get result(): T {
      return this._result;
    }
};