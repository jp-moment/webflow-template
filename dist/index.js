"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(() => {
    console.log("\u2705 Mon JavaScript fonctionne depuis Webflow !");
  });
})();
//# sourceMappingURL=index.js.map
