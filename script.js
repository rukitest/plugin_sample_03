$( function() {

    $(".slider").slick({
      // ナビゲーションとしてサムネイルを使用
      asNavFor:'.thumbnail',
      // アクセシビリティ｜左右ボタンによる画像の切り替え ON/OFF
      accessibility: true,
      // 左右のボタン表示の ON/OFF
      arrows: false,
      // ページ送り(dots)表示の ON/OFF
      dots: false,
      // dots の class名定義 <ul class="XXX">
      dotsClass: 'dot-class',
      // ドラッグを有効にするかの ON/OFF
      draggable: false,
      // タッチスワイプに対応するの ON/OFF
      swipe: true,

      // 自動再生の切り替え ON/OFF
      autoplay: false,
      // 自動再生で切り替えをする時間
      autoplaySpeed: 3000,
      // 自動再生や左右の矢印でスライドするスピード
      speed: 500,
      // 無限スクロールの ON/OFF
      infinite: true,

      // マウスオンで一時停止の ON/OFF
      pauseOnHover: true,
      // ドットにマウスオンで一時停止の ON/OFF
      pauseOnDotsHover: true,

      // 縦方向へのスライドの ON/OFF
      vertical: false,
      // 切り替えの方式｜ease,linear,ease-in,ease-out,ease-in-out
      cssEase: 'ease',
      // 切り替え時のフェードインの ON/OFF
      fade: false,
      // 画像の遅延表示｜ ondemand / progressive
      lazyLoad: 'ondemand',

      // 最初のスライダーの位置
      initialSlide: 0,
      // スライドのエリア表示される画像の数
      slidesToShow: 1,
      // 一度にスライドする画像の数
      slidesToScroll: 1,

      // 表示中の画像を中央へ
    　centerMode: true,
      // 中央のpadding値の定義
      centerPadding: '0px'
    });

    $('.thumbnail').slick({
      asNavFor:'.slider',
      focusOnSelect: true,
      arrows: false,
      slidesToShow:4,
    });

});
