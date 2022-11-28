## string  array conversions

```js
let str = 'MahanandaNagar,Ujjain,MadhyaPradesh';;
let arr = str.split(,);  //(3) ['MahanandaNagar', 'Ujjain', 'MadhyaPradesh']
let arr = str.split();   //['MahanandaNagar,Ujjain,MadhyaPradesh']

```

```js
let arr = ['MahanandaNagar','Ujjain','MadhyaPradesh'];
let str = arr.join();      //'MahanandaNagar,Ujjain,MadhyaPradesh'
let str = arr.join(' ')    //'MahanandaNagar Ujjain MadhyaPradesh'
```