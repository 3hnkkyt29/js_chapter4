const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup', () => {
  count.textContent = text.value.length;
  // キー入力された時の処理
})
/* '文字列'.length;
で文字数の値を取得できる。
*/