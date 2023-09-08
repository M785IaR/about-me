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
});

})