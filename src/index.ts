import { tween } from "./tween";
import type { TWEEN } from './type';


type easeingFn = keyof TWEEN;
type property = keyof DOMRect;

class Animate {
    dom: HTMLElement;
    startTime: number;
    startPos: number;
    endPos: number;
    propertyName: property | null;
    easing: string | TWEEN[easeingFn] | null;
    duration: number;
    animateFrameId: number | null;
    unit: string;

    constructor(dom: HTMLElement) {
        this.dom = dom; // 进行运动的dom节点
        this.startTime = 0; // 动画开始时间 
        this.startPos = 0; //动画开始时，dom节点的位置，即dom的初始位置
        this.endPos = 0; //动画结束时，dom节点的位置，即dom的目标位置
        this.propertyName = null; // dom节点需要被改变的css属性名
        this.easing = null; // 缓动算法
        this.duration = 0; // 动画持续时间
        this.animateFrameId = null; // requestAnimationFrame Id
        this.unit = ''; // 单位
    }

    start(propertyName: property, endPos: number, duration: number, easing: string | TWEEN[easeingFn], unit: string = 'px') {
        this.startTime = +new Date; //动画启动时间
        this.startPos = this.dom.getBoundingClientRect()[propertyName] as number; // dom节点初始位置
        this.propertyName = propertyName;
        this.endPos = endPos;
        this.duration = duration;
        this.easing = typeof easing === 'string' ? tween[easing] : easing;
        this.unit = unit;

        this.animateFrame();
    }

    animateFrame() {
        if (this.step() === false) {
            this.animateFrameId && cancelAnimationFrame(this.animateFrameId);
            return;
        }
        this.animateFrameId = window.requestAnimationFrame(this.animateFrame.bind(this));
    }


    // 动画每一帧需要做的事
    step() {
        const t = +new Date;
        if (t >= this.startTime + this.duration) {
            this.update(this.endPos);
            return false;
        }

        const easingFn = this.easing as TWEEN[easeingFn];
        const pos = easingFn(t - this.startTime, this.startPos, this.endPos - this.startPos, this.duration);
        // pos为当前位置
        this.update(pos);
    }

    update(pos: number) {
        this.dom.style.setProperty(this.propertyName as property, pos + this.unit);
    }
}


export default Animate;
