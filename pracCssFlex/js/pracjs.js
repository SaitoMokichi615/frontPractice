'use strict'
{
  const point = {
    x: 100,
    y: 200,
    z: 300,
  };

  // pointのkeyの一覧取得
  const keys = Object.keys(point);

  // pointのkeyとvalueを表示
  keys.forEach(key => {
    // point.keyでは、値を取得できず、undefinedとなる。
    console.log(`Key:${key}, Value:${point[key]}`);
  });

  // pointと同じ形式のオブジェクトを要素とする配列
  const points = [
    {x: 30, y:20},
    {x: 10, y:50},
    {x: 40, y:40},
  ];
  
  console.log(points[1].y)

  // 変数の代入
  let x = 1;
  let y = x;
  x = 3;
  console.log(x);
  console.log(y);

  let p = [1, 2];
  let q = p; //  参照値が渡される
  p[0] = 4;
  console.log(p);
  console.log(q); //  not [1, 2], but [4, 2](=p)

  // 配列の参照値ではなく、要素そのものを渡す（スプレッド構文）
  let s = [3, 4, 5];
  let t = [...s];
  s[0] = 6;
  console.log(s);
  console.log(t);

  const sum = (a, b) => a + b;
  const double = a => 2*a;

  console.log(sum(1, 2));
  console.log(double(2));
}