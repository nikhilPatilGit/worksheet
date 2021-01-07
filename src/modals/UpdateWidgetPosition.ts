import { Position } from "./Position";

export class UpdateWidgetPosition {
    private _widgetId: string;
    private _position: Position;

    constructor(widgetId: string, position: Position){
        this._widgetId = widgetId;
        this._position = position;
    }

    
    public get widgetId() : string {
        return this._widgetId;
    }
    
    
    public get postion() : Position {
        return this._position; 
    }
    
}