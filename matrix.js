/*!
 * 矩阵运算
 * https://github.com/lab-contrib/arith-js/blob/master/matrix.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2022-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

import { isArray } from '@hai2007/tool/type';

export default function (initMatrix) {

    var copyArray2 = function (input) {
        var _copyMatrix = [], row, col;
        for (row = 0; row < input.length; row++) {
            _copyMatrix[row] = [];
            for (col = 0; col < input[row].length; col++) {
                _copyMatrix[row][col] = input[row][col];
            }
        }
        return _copyMatrix;
    };

    var toValue = function (input) {
        return copyArray2(isArray(input) ? input : input.value());
    };

    var _matrix = toValue(initMatrix);

    var matrixObj = {

        // 矩阵的值
        "value": function () {
            return _matrix;
        },

        // 矩阵相乘
        "multiply": function (newMatrix) {
            var _newMatrix = toValue(newMatrix);

            if (_matrix[0].length != _newMatrix.length) {
                throw new Error("Not a matrix that can be multiplied：A(" + _matrix.length + "," + _matrix[0].length + ")*B(" + _newMatrix.length + "," + _newMatrix[0].length + ")");
            }

            var _temp = [], row, col, index;

            // 一行行
            for (row = 0; row < _matrix.length; row++) {
                _temp[row] = [];

                // 一列列
                for (col = 0; col < _newMatrix[0].length; col++) {
                    _temp[row][col] = 0;

                    for (index = 0; index < _newMatrix.length; index++) {
                        _temp[row][col] += (_matrix[row][index] * _newMatrix[index][col]);
                    }

                }

            }
            _matrix = _temp;

            return matrixObj;
        },

        // 矩阵点乘
        "dot": function (newMatrix) {
            var _newMatrix = toValue(newMatrix);

            var row, col;
            for (row = 0; row < _matrix.length; row++) {
                for (col = 0; col < _matrix[0].length; col++) {
                    _matrix[row][col] *= _newMatrix[row][col];
                }
            }

            return matrixObj;
        },

        // 矩阵减
        "minus": function (newMatrix) {
            var _newMatrix = toValue(newMatrix);

            var row, col;
            for (row = 0; row < _matrix.length; row++) {
                for (col = 0; col < _matrix[0].length; col++) {
                    _matrix[row][col] -= _newMatrix[row][col];
                }
            }

            return matrixObj;
        },

        // 矩阵加
        "add": function (newMatrix) {
            var _newMatrix = toValue(newMatrix);

            var row, col;
            for (row = 0; row < _matrix.length; row++) {
                for (col = 0; col < _matrix[0].length; col++) {
                    _matrix[row][col] += _newMatrix[row][col];
                }
            }

            return matrixObj;
        },

        // 转置
        "T": function () {

            var _temp = [], row, col;
            for (row = 0; row < _matrix[0].length; row++) {
                _temp[row] = [];
                for (col = 0; col < _matrix.length; col++) {
                    _temp[row][col] = _matrix[col][row];
                }
            }
            _matrix = _temp;

            return matrixObj;
        }

    };

    return matrixObj;
};
