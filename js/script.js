window.addEventListener('DOMContentLoaded',() => {
const swiper = new Swiper(".swiper-container", {
    // ドットインジケーターの表示
    pagination: {
    el: ".swiper-pagination",
    },
  // 前後スライドボタンを表示
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true, // ループの有効化
    grabCursor: true,
    effect: "cards",
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
    prev: { // 表示しているスライドの移動先
      shadow: true, // 影の有効化
      translate: [0, 0, -400], // translateをX,Y,Zで指定
    },
    next: { // 次に表示されるスライドの設定
      translate: ["100%", 0, 0], // translateをX,Y,Zで指定
    },
},
});

})