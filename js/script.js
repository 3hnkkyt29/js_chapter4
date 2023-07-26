const loading = document.querySelector('#loading');

window.addEventListener('load',() => {
  // ローディングが終わった時の処理
  loading.classList.add('loaded');
});
/*要素.classList.add('クラス名');
 https://developer.mozilla.org/ja/docs/Web/API/Element/classList
 クラスを削除したい場合は
 要素.classList.remove('クラス名');
 */
