"use strict";

{
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    //const results = ["大吉", "中吉", "凶", "末吉"];
    //const results = ["大吉", "大吉", "大吉", "大吉", "凶"];
    //btn.textContent = results[Math.floor(Math.random() * results.length)];
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = "よう"; // 5%
    } else if (n < 0.1) {
      btn.textContent = "さくや"; // 15%
    } else if (n < 0.2) {
      btn.textContent = "ゆきむら"; // 15%
    } else if (n < 0.3) {
      btn.textContent = "もっちー"; // 15%
    } else if (n < 0.4) {
      btn.textContent = "せち"; // 15%
    } else if (n < 0.5) {
      btn.textContent = "つだっち"; // 15%
    } else {
      btn.textContent = "一生独身"; // 65%
    }
  });
}
