window.addEventListener('DOMContentLoaded',() => {

// bodyタグを取得
const documentBody = document.querySelector('body');
// body直下に右から左のカーテン
var newElement1 = document.createElement("div");
newElement1.setAttribute("class","leftCurtainbg");
documentBody.prepend(newElement1);
// body直下に左から右のカーテン
var newElement2 = document.createElement("div");
newElement2.setAttribute("class","rightCurtainbg");
documentBody.prepend(newElement2);


// bodyタグにclassを付与
documentBody.classList.add('pageOn');

// 1.5秒経ったらオーバーレイ非表示
setTimeout(function(){
    newElement1.style.display = "none";
    newElement2.style.display = "none";
}, 1500);

// ページ遷移時にフェードアウト
window.addEventListener("beforeunload", () => {
documentBody.classList.add('fadeout');
setTimeout(function(){
    documentBody.style.display = "none";
}, 1000);
}, false);

})