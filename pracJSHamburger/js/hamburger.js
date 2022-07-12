// 厳密なエラーチェックをする
'use strict';
{
  const btnMenu = document.getElementById("btn-menu");
  const overlay = document.querySelector(".overlay");
  const btnClose = document.getElementById("btn-close");

  // ハンバーガーメニューボタン押下時のイベント処理
  btnMenu.addEventListener("click", () => {
    overlay.classList.add('show');
    btnMenu.classList.add("hide");
  });

  // 閉じるボタン押下時のイベント処理
  btnClose.addEventListener("click", () => {
    overlay.classList.remove("show");
    btnMenu.classList.remove("hide");
  });
}