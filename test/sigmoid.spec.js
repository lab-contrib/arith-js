allege.test('sigmoid激活函数', function (handler) {

    handler.deepEqual(ArithJs.sigmoid(0), 0.5, '[1]数字');

    handler.do(function () {
        return ArithJs.sigmoid(1) > 0.5;
    }, '[2]数字');


    handler.do(function () {
        return ArithJs.sigmoid(-1) < 0.5;
    }, '[3]数字');

    handler.deepEqual(ArithJs.sigmoid([0, 0, 0]), [0.5, 0.5, 0.5], '[4]一维数组');

    handler.deepEqual(ArithJs.sigmoid([
        [0, 0, 0]
    ]), [
        [0.5, 0.5, 0.5]
    ], '[5]二维数组');

    handler.deepEqual(ArithJs.sigmoid([
        [0, 0, 0],
        [0, 0, 0]
    ]), [
        [0.5, 0.5, 0.5],
        [0.5, 0.5, 0.5]
    ], '[6]二维数组');

    handler.do(function () {
        var temp = ArithJs.sigmoid([-1, 0, 1]);
        return temp[0] < 0.5 && temp[1] == 0.5 && temp[2] > 0.5;

    }, '[7]一维数组');

});