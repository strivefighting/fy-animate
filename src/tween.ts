import type { TWEEN } from './type'

/**
 * Flash缓动函数策略对象
 * @param {Number} t  动画已消耗时间/ms
 * @param {Number} b 小球初始位置
 * @param {Number} c 小球运动量
 * @param {Number} d 动画持续的总时间/ms
 * @returns 动画元素当前应该处在的位置
 */
export const tween: TWEEN = {
    linear: function (t, b, c, d) {
        return c * t / d + b
    },
    easeIn: function (t, b, c, d) {
        return c * (t /= d) * t + b
    },
    easeOut: function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOut: function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        }
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    strongEaseIn: function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b
    },
    strongEaseOut: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    },
    sineaseIn: function (t, b, c, d) {
        return c * (t /= d) * t * t + b
    },
    sineaseOut: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b
    }
}