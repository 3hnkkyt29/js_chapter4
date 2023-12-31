const getScrollPercent = () => {
  // console.log('スクロールされました');
  // スクロール量
  const scrolled = window.scrollY;
  // スクロール量は「scrollY」で取得できる（Yは大文字注意！）
  // console.log(`${scrolled} スクロールされました`);

  // 4-15
  // ページ全体の高さ
  const pageHeight = document.documentElement.scrollHeight;

  // 表示領域の高さ
  const viewHeight = document.documentElement.clientHeight;
  // console.log(`ページの高さ：${pageHeight}、表示領域の高さ：${viewHeight}`)

  // 4-16
  // スクロールされた割合
  const percentage = scrolled / (pageHeight - viewHeight) * 100;
  /*
  + 足し算
  - 引き算
  * 掛け算
  / 割り算
  % 割り算のあまりを計算
  ** ⚪︎乗を計算
  */

  // プログレスバーに幅を指定
  document.querySelector('#bar').style.width = `${percentage}%`;
}

window.addEventListener('scroll', getScrollPercent);

