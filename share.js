/* 計算結果的「複製」「分享」按鈕：#result 有內容時自動加在結果下方 */
(function () {
  const box = document.getElementById("result");
  if (!box) return;

  function resultText() {
    const clone = box.cloneNode(true);
    clone.removeAttribute("id");
    clone.querySelectorAll(".share-bar, .error").forEach(el => el.remove());
    // 表格每列轉成「項目：金額」
    clone.querySelectorAll("tr").forEach(tr => {
      const cells = [...tr.children].map(td => td.textContent.replace(/\s+/g, " ").trim()).filter(Boolean);
      const div = document.createElement("div");
      div.textContent = cells.join("：");
      tr.closest("table").before(div);
      tr.remove();
    });
    // 放進頁面（看不見的位置）才能取得正確的換行
    clone.style.cssText = "position:absolute;left:-9999px;top:0;width:600px";
    document.body.appendChild(clone);
    const text = clone.innerText.split("\n").map(l => l.trim()).join("\n").replace(/\n{3,}/g, "\n\n").trim();
    clone.remove();
    const title = (document.querySelector("h1") || {}).innerText || document.title;
    return `【${title}】\n${text}\n\n試算工具：${location.href.split("#")[0]}`;
  }

  function flash(btn, msg) {
    const old = btn.textContent;
    btn.textContent = msg;
    setTimeout(() => (btn.textContent = old), 1800);
  }

  async function copy(btn) {
    const text = resultText();
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (e2) { /* 忽略 */ }
      ta.remove();
    }
    flash(btn, "已複製 ✓");
  }

  async function share(btn) {
    const url = location.href.split("#")[0];
    const title = (document.querySelector("h1") || {}).innerText || document.title;
    if (navigator.share) {
      try {
        await navigator.share({ title, text: resultText(), url });
        return;
      } catch (e) {
        if (e && e.name === "AbortError") return;
      }
    }
    // 不支援系統分享（多數電腦瀏覽器）：開 LINE 分享
    window.open("https://social-plugins.line.me/lineit/share?url=" + encodeURIComponent(url), "_blank", "noopener");
    flash(btn, "已開啟 LINE 分享");
  }

  function addBar() {
    if (box.hidden || !box.textContent.trim() || box.querySelector(".share-bar")) return;
    if (box.querySelector(".error") && box.innerText.trim().length < 80) return; // 只有錯誤訊息時不顯示
    const bar = document.createElement("div");
    bar.className = "share-bar";
    bar.innerHTML = '<button type="button" class="btn-ghost" data-act="copy">📋 複製結果</button>'
      + '<button type="button" class="btn-ghost" data-act="share">🔗 分享給朋友</button>';
    bar.addEventListener("click", e => {
      const b = e.target.closest("button");
      if (!b) return;
      b.dataset.act === "copy" ? copy(b) : share(b);
    });
    box.appendChild(bar);
  }

  new MutationObserver(() => addBar()).observe(box, { childList: true, attributes: true, attributeFilter: ["hidden"] });
})();
