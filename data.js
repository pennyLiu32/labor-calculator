/*
 * 每年要更新的數字都集中在這個檔案。
 * 更新方式：改這裡的數字 → 把 YEAR 改成新年度 → 上傳。各頁面會自動套用。
 * 頁面文字中的數字用 <span data-v="路徑">預設文字</span> 標記，載入時會用這裡的數字取代。
 * 每個數字旁邊的註解寫了資料來源，方便明年查。
 */
window.TW = {
  YEAR: 2026,          // 西元年
  ROC: 115,            // 民國年
  UPDATED: "2026-10-18",

  // 基本工資（勞動部公告）
  minWage: { monthly: 29500, hourly: 196 },

  // 勞保（勞保局「勞工保險投保薪資分級表」）
  laborIns: {
    rate: 0.115,          // 普通事故保險費率
    empRate: 0.01,        // 就業保險費率
    workerShare: 0.2,     // 勞工負擔比例
    grades: [29500, 30300, 31800, 33300, 34800, 36300, 38200, 40100, 42000, 43900, 45800],
    max: 45800            // 投保薪資上限（也是失業給付、勞保年金的計算上限）
  },

  // 健保（健保署「全民健康保險投保金額分級表」）
  health: {
    rate: 0.0517,
    workerShare: 0.3,     // 受僱者負擔
    civilShare: 0.3,      // 公務人員負擔
    maxDeps: 3,           // 眷屬最多計 3 人
    supplementRate: 0.0211, // 二代健保補充保費費率
    grades: [29500, 30300, 31800, 33300, 34800, 36300, 38200, 40100, 42000, 43900, 45800,
      48200, 50600, 53000, 55400, 57800, 60800, 63800, 66800, 69800, 72800, 76500, 80200, 83900, 87600,
      92100, 96600, 101100, 105600, 110100, 115500, 120900, 126300, 131700, 137100, 142500, 147900, 150000,
      156400, 162800, 169200, 175600, 182000, 189500, 197000, 204500, 212000, 219500, 228200, 236900,
      245600, 254300, 263000, 273000, 283000, 293000, 303000, 313000]
  },

  // 勞退新制（勞工退休金條例）
  laborPension: {
    maxWage: 150000,      // 月提繳工資上限
    employerRate: 0.06,   // 雇主至少提繳 6%
    claimAge: 60,         // 請領年齡
    monthlyMinYears: 15,  // 年資滿 15 年才能選月領
    lifeYears: 23,        // 勞保局計算月退休金用的平均餘命（年）
    annuityRate: 0.011473 // 計算月退休金用的利率（前 3 年保證收益率平均）
  },

  // 勞保老年給付（勞工保險條例第 58、58-1、58-2 條）
  laborAnnuity: {
    claimAge: 65,         // 1962 年（51 年次）以後出生者
    rateA: 0.00775, plusA: 3000,
    rateB: 0.0155,
    adjustPerYear: 0.04,  // 提前每年減給、延後每年增給
    maxAdjustYears: 5,
    minYears: 15,         // 年資滿 15 年才能請領年金
    avgMonths: 60         // 年金：最高 60 個月平均
  },

  // 就業保險
  employmentIns: {
    benefitRate: 0.6, depAdd: 0.1, depMax: 2,
    months: 6, monthsOlder: 9   // 45 歲以上或身障者 9 個月
  },

  // 薪資扣繳（財政部「薪資所得扣繳辦法」）
  withholding: {
    bonusThreshold: 90501,  // 獎金等非固定薪資：達此金額按 5% 扣繳
    bonusRate: 0.05
  },

  // 綜合所得稅（財政部公告，115 年度所得、116 年 5 月申報）
  tax: {
    incomeYear: 115,
    exemption: 101000,
    exemption70: 151500,
    standard: 136000,
    standardMarried: 272000,
    salaryDeduction: 227000,
    disabilityDeduction: 227000,
    savingsDeduction: 270000,
    educationDeduction: 25000,
    preschool: [150000, 225000],  // 第 1 名、第 2 名起
    longTermCare: 180000,
    rent: 180000,
    basicLiving: 213000,          // 115 年度尚未公告，暫用 114 年度金額
    basicLivingPending: true,
    // [淨所得上限, 稅率, 累進差額]
    brackets: [[610000, 0.05, 0], [1380000, 0.12, 42700], [2770000, 0.2, 153100],
               [5190000, 0.3, 430100], [Infinity, 0.4, 949100]]
  },

  // 公務人員
  civil: {
    // 俸點折算標準（2025 年 1 月 1 日起，2026 年未調整）：[俸點上限, 每點元]
    pointRates: [[160, 83.6], [220, 54.1], [790, 76.6], [Infinity, 327.7]],
    gibRate: 7.22,        // 公保費率（不適用年金者）
    gibShare: 0.35,
    pensionRate: 15,      // 退撫提撥費率（預設）
    pensionShare: 0.35,
    allowanceRaise: "2026 年 7 月 1 日起專業加給、主管加給各增加 2,000 元",
    // 各職等本俸、年功俸俸點
    payTable: {
      1:  { base: [160, 170, 180, 190, 200, 210, 220], merit: [230, 240, 250, 260, 270, 280] },
      2:  { base: [230, 240, 250, 260, 270], merit: [280, 290, 300, 310, 320, 330] },
      3:  { base: [280, 290, 300, 310, 320], merit: [330, 340, 350, 360, 370, 385, 400, 415] },
      4:  { base: [300, 310, 320, 330, 340], merit: [350, 360, 370, 385, 400, 415, 430, 445] },
      5:  { base: [330, 340, 350, 360, 370], merit: [385, 400, 415, 430, 445, 460, 475, 490, 505, 520] },
      6:  { base: [385, 400, 415, 430, 445], merit: [460, 475, 490, 505, 520, 535] },
      7:  { base: [415, 430, 445, 460, 475], merit: [490, 505, 520, 535, 550, 590] },
      8:  { base: [445, 460, 475, 490, 505], merit: [520, 535, 550, 590, 610, 630] },
      9:  { base: [490, 505, 520, 535, 550], merit: [590, 610, 630, 650, 670, 690, 710] },
      10: { base: [590, 610, 630, 650, 670], merit: [690, 710, 730, 750, 780] },
      11: { base: [610, 630, 650, 670, 690], merit: [710, 730, 750, 780, 790] },
      12: { base: [650, 670, 690, 710, 730], merit: [750, 780, 790, 800] },
      13: { base: [710, 730, 750], merit: [780, 790, 800] },
      14: { base: [800], merit: [] }
    }
  },

  // 軍公教年終與考績獎金
  bonus: {
    yearEndMonths: 1.5,
    // 考績獎金月數：[一般, 已達最高俸級]
    civilMerit: { A: [1, 2], B: [0.5, 1.5], D: [0, 0] },
    militaryMerit: { A: [1, 2], B: [0.5, 1.5], C: [0, 0], D: [0, 0] }   // 甲等以上、乙上、乙等、丙等以下
  },

  // 退輔會（國軍退除役官兵參加職業訓練補助辦法、促進退除役官兵穩定就業津貼發給辦法）
  veteran: {
    trainingCap: { first: 120000, second: 80000 },
    afterTraining: { first: [12000, 8000], second: [6000, 4000] },
    referral: { first: 8000, second: 4000 }
  },

  // 勞動部職訓
  training: {
    newTalentMax: 100000,     // 產業新尖兵訓練費上限
    newTalentMonthly: 8000,   // 產業新尖兵學習獎勵金
    investMax: 100000         // 產業人才投資方案 3 年上限
  }
};

// 共用小工具
TW.fmt = n => Math.round(n).toLocaleString("zh-TW");
TW.gradeOf = (amount, grades) => grades.find(g => amount <= g) || grades[grades.length - 1];
TW.get = path => path.split(".").reduce((o, k) => (o == null ? o : o[k]), TW);

// 把頁面上 <span data-v="..."> 換成這裡的數字；data-f="pct" 顯示百分比
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-v]").forEach(el => {
    const v = TW.get(el.dataset.v);
    if (v === undefined) return;
    const key = el.dataset.v.split(".").pop();
    if (el.dataset.f === "pct") el.textContent = +(v * 100).toFixed(4) + "%";
    else if (typeof v === "number" && !/YEAR|ROC|Year/.test(key)) el.textContent = v.toLocaleString("zh-TW");
    else el.textContent = String(v);
  });
  // 輸入框的預設值：<input data-default="路徑">
  document.querySelectorAll("[data-default]").forEach(el => {
    const v = TW.get(el.dataset.default);
    if (v !== undefined) el.value = v;
  });
});
