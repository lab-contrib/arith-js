allege.test('矩阵运算', function (handler) {

    handler.do(function () {

        try {
            ArithJs.Matrix([
                [1, 2, 3],
                [4, 5, 6]
            ]).multiply([[1, 2, 3, 4, 5, 6, 7]]);

            return false;
        } catch (e) {
            // console.error(e);
            return true;
        }

    }, '[1]不可以相乘的矩阵');

    handler.deepEqual(ArithJs.Matrix([
        [1, 2, 3],
        [4, 5, 6]
    ]).multiply([
        [1],
        [2],
        [3]
    ]).value(), [
        [14],
        [32]
    ], '[2]相乘');

    handler.deepEqual(ArithJs.Matrix([
        [1, 2, 3],
        [4, 5, 6]
    ]).T().value(), [
        [1, 4],
        [2, 5],
        [3, 6]
    ], '[3]转置');

    handler.deepEqual(ArithJs.Matrix([
        [1, 2, 3],
        [4, 5, 6]
    ]).add([
        [0, 2, 3],
        [4, 8, 6]
    ]).value(), [
        [1, 4, 6],
        [8, 13, 12]
    ], '[4]加');

    handler.deepEqual(ArithJs.Matrix([
        [1, 2, 3],
        [4, 5, 6]
    ]).dot([
        [0, 2, 3],
        [4, 8, 6]
    ]).value(), [
        [0, 4, 9],
        [16, 40, 36]
    ], '[5]点乘');

});