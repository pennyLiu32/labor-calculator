// 選單：電腦版永遠展開，手機版預設收合成「☰ 選單」
(function () {
  var wrap = document.querySelector(".nav-wrap");
  if (!wrap) return;
  var mobile = window.matchMedia("(max-width: 768px)");
  function apply() { wrap.open = !mobile.matches; }
  apply();
  if (mobile.addEventListener) mobile.addEventListener("change", apply);
})();
