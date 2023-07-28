const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup', () => {
  count.textContent = text.value.length;
  // キー入力された時の処理

/* '文字列'.length;
で文字数の値を取得できる。
*/

// 4-9
if (text.value.length > 100) {
  count.classList.add('alert');
} else {
  count.classList.remove('alert');
}
});
/* 比較演算子
A === B AとBが等しいか
A > B AがBを超えるか
A < B AがB未満か
A >= B AがB以上か
A <= B AがB以下か
A !== B AがBと等しくないか
*/