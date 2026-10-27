"use client";

import { useEffect, useRef } from "react";

export default function PageInteractions({ children }) {
  const rootRef = useRef(null);
  useEffect(() => {
    const root = rootRef.current;
    const controller = new AbortController();
    const listen = (element, event, listener) => element?.addEventListener(event, listener, { signal: controller.signal });
    const input = root.querySelector("#eventSearchInput");
    if (input) {
      const cards = [...root.querySelectorAll(".event-item")];
      const statusButtons = [...root.querySelectorAll(".filter-status-btn")];
      const sectorButtons = [...root.querySelectorAll(".sector-chip")];
      const clear = root.querySelector("#clearSearchBtn");
      const count = root.querySelector("#resultsCountText");
      const empty = root.querySelector("[data-events-empty]");
      let status = new URLSearchParams(window.location.search).get("status") === "archive" ? "archive" : "all";
      let sector = "all";
      function update() {
        const query = input.value.trim().toLowerCase();
        let visible = 0;
        for (const card of cards) {
          const match = (status === "all" || card.dataset.status === status) && (sector === "all" || card.dataset.sector === sector) && (!query || card.textContent.toLowerCase().includes(query));
          card.hidden = !match;
          if (match) visible++;
        }
        count.textContent = "Showing " + visible + " Result" + (visible === 1 ? "" : "s");
        clear.classList.toggle("hidden", !query);
        empty.classList.toggle("hidden", visible > 0);
        for (const button of statusButtons) {
          const selected = button.dataset.filterStatus === status;
          button.setAttribute("aria-pressed", String(selected));
          button.classList.toggle("bg-inverse-surface", selected);
          button.classList.toggle("text-inverse-on-surface", selected);
          button.classList.toggle("text-secondary", !selected);
        }
        for (const button of sectorButtons) {
          const selected = button.dataset.filterSector === sector;
          button.setAttribute("aria-pressed", String(selected));
          button.classList.toggle("bg-inverse-surface", selected);
          button.classList.toggle("text-inverse-on-surface", selected);
          button.classList.toggle("bg-surface-container", !selected);
          button.classList.toggle("text-secondary", !selected);
        }
      }
      for (const button of statusButtons) {
        const kind = button.dataset.filterStatus;
        const total = cards.filter((card) => kind === "all" || card.dataset.status === kind).length;
        button.textContent = (kind === "all" ? "All Expos" : kind === "archive" ? "Past Editions" : "Upcoming (2026–2027)") + " (" + total + ")";
        listen(button, "click", () => { status = kind; update(); });
      }
      for (const button of sectorButtons) listen(button, "click", () => { sector = button.dataset.filterSector; update(); });
      listen(input, "input", update);
      listen(clear, "click", () => { input.value = ""; update(); input.focus(); });
      listen(root.querySelector("#resetAllFiltersBtn"), "click", () => { input.value = ""; status = "all"; sector = "all"; update(); });
      update();
    }
    const homeButtons = [...root.querySelectorAll("[data-home-filter]")];
    for (const button of homeButtons) {
      listen(button, "click", () => {
        const status = button.dataset.homeFilter;
        let visible = 0;
        for (const card of root.querySelectorAll("[data-home-event]")) {
          card.hidden = status !== "all" && card.dataset.homeEvent !== status;
          if (!card.hidden) visible++;
        }
        root.querySelector("[data-home-empty]").classList.toggle("hidden", visible > 0);
        for (const tab of homeButtons) {
          const selected = tab === button;
          tab.setAttribute("aria-pressed", String(selected));
          for (const name of ["bg-surface-container-lowest", "shadow-sm", "text-on-surface"]) tab.classList.toggle(name, selected);
          tab.classList.toggle("text-secondary", !selected);
        }
      });
    }
    return () => controller.abort();
  }, []);
  return <div ref={rootRef}>{children}</div>;
}
