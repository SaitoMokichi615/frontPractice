'use strict'
{
  let numItem = 3;
  const minNumItem = 1;
  const maxNumitem = 20;

  /* btn-add-flex-itemボタン押下時のイベント処理 */
  $('.btn-add-flex-item').click(() => {
    if(numItem < maxNumitem){
      numItem++;
      $('.flex-container').append(
        `<div class="flex-item">
            <h2 class="item-title">商品${numItem}名称</h2>
            <div class="item-image">
              <img src="../img/photo.jpg" alt="商品${numItem}画像">
            </div>
            <p class="item-description">商品${numItem}の概要</p>
         </div>
        `
      );
    }
  });


  /* btn-remove-flex-itemボタン押下時のイベント処理 */
  $('.btn-remove-flex-item').click(() => {
    if(numItem > minNumItem){
      $('.flex-item:last').remove();
      numItem--;
    }
  });


  /* justify-contentのラジオボタンのチェック項目変更時のイベント処理 */
  $('input:radio[name="justify-content"]').change(() => {

    // 選択項目のプロパティ名取得
    const property = $('input:radio[name="justify-content"]:checked').val();

    // フレックスコンテナのjustify-contentプロパティ値を変更
    if(property === 'start'){
      $('.flex-container').css('justify-content','start');
    }
    else if(property === 'end'){
      $('.flex-container').css('justify-content','end');
    }
    else if(property === 'space-between'){
      $('.flex-container').css('justify-content','space-between');
    }
    else if(property === 'space-around'){
      $('.flex-container').css('justify-content','space-around');
    }
  });


  /* flex-wrapのラジオボタンのチェック項目変更時のイベント処理 */
  $('input:radio[name="flex-wrap"]').change(() => {

    // 選択項目のプロパティ名取得
    const property = $('input:radio[name="flex-wrap"]:checked').val();

    // フレックスコンテナのflex-wrapプロパティ値を変更
    if(property === 'nowrap'){
      $('.flex-container').css('flex-wrap','nowrap');
    }
    else if(property === 'wrap'){
      $('.flex-container').css('flex-wrap','wrap');
    }
    else if(property === 'wrap-reverse'){
      $('.flex-container').css('flex-wrap','wrap-reverse');
    }
  });


  /* align-itemsのラジオボタンのチェック項目変更時のイベント処理 */
  $('input:radio[name="align-items"]').change(() => {

    // 選択項目のプロパティ名取得
    const property = $('input:radio[name="align-items"]:checked').val();

    // フレックスコンテナのalign-itemsプロパティ値を変更
    if(property === 'flex-start'){
      $('.flex-container').css('align-items','flex-start');
    }
    else if(property === 'flex-end'){
      $('.flex-container').css('align-items','flex-end');
    }
    else if(property === 'center'){
      $('.flex-container').css('align-items','center');
    }
  });


  /* flex-directionのラジオボタンのチェック項目変更時のイベント処理 */
  $('input:radio[name="flex-direction"]').change(() => {

    // 選択項目のプロパティ名取得
    const property = $('input:radio[name="flex-direction"]:checked').val();

    // フレックスコンテナのflex-directionプロパティ値を変更
    if(property === 'row'){
      $('.flex-container').css('flex-direction','row');
    }
    else if(property === 'row-reverse'){
      $('.flex-container').css('flex-direction','row-reverse');
    }
    else if(property === 'column'){
      $('.flex-container').css('flex-direction','column');
    }
    else if(property === 'column-reverse'){
      $('.flex-container').css('flex-direction','column-reverse');
    }
  });
}