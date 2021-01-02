export class Position {
    private _x: number;
    private _y: number;

    constructor(x: number, y:number){
        this._x = x;
        this._y = y;
    }

    get x(): number{
        return this._x
    }

    get y(): number{
        return this._y
    }
}

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