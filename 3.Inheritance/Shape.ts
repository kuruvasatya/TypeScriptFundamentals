export class Shape {
    constructor( private _x: number, private _y: number) {
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    set x( value: number) {
        this._x = value;
    }

    set xy( value: number) {
        this._y = value;
    }

    getInfo(): string {
        return `x = ${this._x} and y = ${this._y}`
    }

}