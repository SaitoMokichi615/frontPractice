// 厳密なエラーチェックをする
'use strict';

{
  const btnDetail = document.getElementById('btn-detail');
  const btnClose = document.getElementById('btn-close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  // 詳細ボタンクリック時のイベント処理
  btnDetail.addEventListener('click', ()=>{
    modal.classList.remove("hidden");
    mask.classList.remove("hidden");
  });

  // 閉じるボタンクリック時のイベント処理
  btnClose.addEventListener('click', ()=>{
    modal.classList.add("hidden");
    mask.classList.add("hidden");
  });

  // マスククリック時のイベント処理
  mask.addEventListener('click', ()=>{
    btnClose.click();
  });
}