import Matrix from './matrix';
import sigmoid from './sigmoid';

var ArithJs = {

    // 矩阵运算
    Matrix: Matrix,

    // sigmoid激活函数
    sigmoid: sigmoid

};

if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = ArithJs;
} else {
    window.ArithJs = ArithJs;
}
