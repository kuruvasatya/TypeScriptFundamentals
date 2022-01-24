import { Shape } from "./Shape";

export class Rectangle extends Shape {
    constructor ( x: number, y: number, private _height: number, private _width: number) {
        super(x, y);
    }

    get height() {
        return this._height
    }

    get width() {
        return this._width
    }

    set height( value: number) {
        this._height = value;
    }

    set width (value: number) {
        this._width = value;
    }

    getInfo(): string {
        return super.getInfo() + ` and height = ${this._height} and width = ${this._width}`
    }

    calculateArea(): number {
        return this._height * this._width;
    }
}