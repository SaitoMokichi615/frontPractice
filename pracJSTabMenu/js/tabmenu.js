// 厳密なエラーチェックをする
'use strict';
{
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  // menuのaタグ(item)に対して以下の処理を実行 
  menuItems.forEach(clickedItem =>{

    // クリックイベントを追加
    clickedItem.addEventListener('click', e => {
      
      // aタグ(item)のページ遷移動作をキャンセル
      e.preventDefault();

      // menuのaタグからactiveクラスを削除
      menuItems.forEach(item => {
        item.classList.remove('active');
      });

      // contentクラスからactiveクラスを削除
      contents.forEach(content => {
        content.classList.remove('active');
      });

      // クリックされたaタグからid名を取得し、当該idの要素にactiveクラスを付与
      document.getElementById(clickedItem.dataset.id).classList.add('active');

      // クリックされたaタグにのみ、activeクラスを追加
      clickedItem.classList.add('active');
    });
  });
}