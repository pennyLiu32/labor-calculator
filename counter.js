// 全站瀏覽人次（GoatCounter）
// 申請帳號後，把下面的 YOUR_CODE 換成你的代碼（例如 laborcalc）
(function () {
  var CODE = "laborcalc";

  var box = document.getElementById("stats");
  if (!box || CODE === "YOUR_CODE") return;

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.setAttribute("data-goatcounter", "https://" + CODE + ".goatcounter.com/count");
  s.onload = function () {
    if (window.goatcounter && window.goatcounter.visit_count) {
      window.goatcounter.visit_count({
        append: "#stats",
        path: "TOTAL",      // 顯示全站總數，不是單頁
        no_branding: true
      });
    }
  };
  document.head.appendChild(s);
})();
