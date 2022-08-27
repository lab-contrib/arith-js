## 矩阵运算

```js
import Matrix from 'arith-js/matrix';
```

### 创建

传入一个参数就可以获取矩阵实例：

```js
var matrix = Matrix(init);
```

参数```init```可以是下面类型中的一种：

- 二维数组

比如：

```js
[
    [1, 2, 3],
    [4, 5, 6]
]
```

- 矩阵实例

### 方法

矩阵实例上有一些方法可以用于运算：

- value

返回矩阵实例对应的二维数组：

```js
matrix.value();
```

- multiply

矩阵相乘，```newMatrix``` 的类型和创建实例时传递的参数```init```一致：

```js
matrix.multiply(newMatrix);
```

- dot

矩阵点乘，```newMatrix``` 的类型和创建实例时传递的参数```init```一致：

```js
matrix.dot(newMatrix);
```

- minus

矩阵相减，```newMatrix``` 的类型和创建实例时传递的参数```init```一致：

```js
matrix.minus(newMatrix);
```

- add

矩阵相加，```newMatrix``` 的类型和创建实例时传递的参数```init```一致：

```js
matrix.add(newMatrix);
```

- T

转置运算

```js
matrix.T();
```

