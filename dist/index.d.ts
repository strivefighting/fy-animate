import type { TWEEN } from './type';
type easeingFn = keyof TWEEN;
type property = keyof DOMRect;
declare class Animate {
    dom: HTMLElement;
    startTime: number;
    startPos: number;
    endPos: number;
    propertyName: property | null;
    easing: string | TWEEN[easeingFn] | null;
    duration: number;
    animateFrameId: number | null;
    unit: string;
    constructor(dom: HTMLElement);
    start(propertyName: property, endPos: number, duration: number, easing: string | TWEEN[easeingFn], unit?: string): void;
    animateFrame(): void;
    step(): false | undefined;
    update(pos: number): void;
}
export default Animate;
