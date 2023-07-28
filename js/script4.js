const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

isAgreed.addEventListener('change', () => {
  // console.log(isAgreed.checked);
  // isAgreed.checkedは文字列ではないので''で囲まなくてOK
  if (isAgreed.checked == true){
  // if (isAgreed.checked)という風に===trueを省略してもOK
  // チェックボックスにチェックが入っているなら
    btn.disabled = false;
    // ボタンの無効化を無しにする＝有効にする
  } else {
    btn.disabled = true;
    // ボタンを無効にする
  }
});
