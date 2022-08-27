/*!
 * sigmoid激活函数
 * https://github.com/lab-contrib/arith-js/blob/master/sigmoid.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2022-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

import { isArray } from "@hai2007/tool/type";

var sigmoid = function (x) {
    return 1 / (1 + Math.exp(-1 * x));
}

export default function (x) {

    // 如果是数组，表示多值
    if (isArray(x)) {
        var _temp = [], i, j;

        // 二维数组
        if (isArray(x[0])) {
            for (i = 0; i < x.length; i++) {
                _temp[i] = [];
                for (j = 0; j < x[i].length; j++) {
                    _temp[i][j] = sigmoid(x[i][j]);
                }
            }
        }

        // 一维数组
        else {
            for (i = 0; i < x.length; i++) {
                _temp.push(sigmoid(x[i]));
            }
        }

        return _temp;
    }

    // 否则就一个值
    else {
        return sigmoid(x);
    }

};