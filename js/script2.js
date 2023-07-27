const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  // ↑クリックされた時の処理
  // 要素.classList.toggle('クラス名');
  // クリックする度につけたり外したりするからdark-themeの追加と削除を交互に行えるようにtoggle

  if (btn.textContent === 'ダークモードにする'){
    btn.textContent = 'ライトモードにする';
  } else {
    btn.textContent = 'ダークモードにする';
  }
});