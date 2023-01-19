"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tween_1 = require("./tween");
var Animate = /** @class */ (function () {
    function Animate(dom) {
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
    Animate.prototype.start = function (propertyName, endPos, duration, easing, unit) {
        if (unit === void 0) { unit = 'px'; }
        this.startTime = +new Date; //动画启动时间
        this.startPos = this.dom.getBoundingClientRect()[propertyName]; // dom节点初始位置
        this.propertyName = propertyName;
        this.endPos = endPos;
        this.duration = duration;
        this.easing = typeof easing === 'string' ? tween_1.tween[easing] : easing;
        this.unit = unit;
        this.animateFrame();
    };
    Animate.prototype.animateFrame = function () {
        if (this.step() === false) {
            this.animateFrameId && cancelAnimationFrame(this.animateFrameId);
            return;
        }
        this.animateFrameId = window.requestAnimationFrame(this.animateFrame.bind(this));
    };
    // 动画每一帧需要做的事
    Animate.prototype.step = function () {
        var t = +new Date;
        if (t >= this.startTime + this.duration) {
            this.update(this.endPos);
            return false;
        }
        var easingFn = this.easing;
        var pos = easingFn(t - this.startTime, this.startPos, this.endPos - this.startPos, this.duration);
        // pos为当前位置
        this.update(pos);
    };
    Animate.prototype.update = function (pos) {
        this.dom.style.setProperty(this.propertyName, pos + this.unit);
    };
    return Animate;
}());
exports.default = Animate;
//# sourceMappingURL=index.js.map