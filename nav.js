// 手機版：把目前所在頁面的選單按鈕自動捲到看得見的位置
(function () {
  var active = document.querySelector(".sidebar nav a.active");
  if (active && window.matchMedia("(max-width: 768px)").matches) {
    active.scrollIntoView({ block: "nearest", inline: "center" });
  }
})();
