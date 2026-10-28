"use client";

import { useEffect, useRef, useState } from "react";

function downloadBlob(blob, name) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// Store selected original photos in a standard ZIP without an extra browser dependency.
async function photoArchive(urls) {
  const encoder = new TextEncoder();
  const table = Array.from({ length: 256 }, (_, i) => {
    let value = i;
    for (let bit = 0; bit < 8; bit++) value = (value >>> 1) ^ ((value & 1) ? 0xedb88320 : 0);
    return value >>> 0;
  });
  const local = [];
  const directory = [];
  let offset = 0;
  for (const url of urls) {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Photo download failed. Please try again.");
    const bytes = new Uint8Array(await response.arrayBuffer());
    const name = encoder.encode(url.split("/").pop());
    let crc = 0xffffffff;
    for (const byte of bytes) crc = (crc >>> 8) ^ table[(crc ^ byte) & 255];
    crc = (crc ^ 0xffffffff) >>> 0;
    const header = new Uint8Array(30 + name.length);
    const view = new DataView(header.buffer);
    view.setUint32(0, 0x04034b50, true);
    view.setUint16(4, 20, true);
    view.setUint16(6, 0x800, true);
    view.setUint16(12, 33, true);
    view.setUint32(14, crc, true);
    view.setUint32(18, bytes.length, true);
    view.setUint32(22, bytes.length, true);
    view.setUint16(26, name.length, true);
    header.set(name, 30);
    local.push(header, bytes);
    const record = new Uint8Array(46 + name.length);
    const info = new DataView(record.buffer);
    info.setUint32(0, 0x02014b50, true);
    info.setUint16(4, 20, true);
    info.setUint16(6, 20, true);
    info.setUint16(8, 0x800, true);
    info.setUint16(14, 33, true);
    info.setUint32(16, crc, true);
    info.setUint32(20, bytes.length, true);
    info.setUint32(24, bytes.length, true);
    info.setUint16(28, name.length, true);
    info.setUint32(42, offset, true);
    record.set(name, 46);
    directory.push(record);
    offset += header.length + bytes.length;
  }
  const end = new Uint8Array(22);
  const info = new DataView(end.buffer);
  info.setUint32(0, 0x06054b50, true);
  info.setUint16(8, urls.length, true);
  info.setUint16(10, urls.length, true);
  info.setUint32(12, directory.reduce((size, item) => size + item.length, 0), true);
  info.setUint32(16, offset, true);
  return new Blob([...local, ...directory, end], { type: "application/zip" });
}

export default function StitchInteractions({ children }) {
  const rootRef = useRef(null);
  const dialogRef = useRef(null);
  const [resource, setResource] = useState({ title: "", description: "", email: "info@maxxmedia.in" });

  useEffect(() => {
    const root = rootRef.current;
    const controller = new AbortController();
    const all = (selector) => [...root.querySelectorAll(selector)];
    const listen = (element, event, handler) => element?.addEventListener(event, handler, { signal: controller.signal });
    const mark = (buttons, selected, active, inactive) => {
      for (const button of buttons) {
        const pressed = button === selected;
        button.setAttribute("aria-pressed", String(pressed));
        active.forEach((name) => button.classList.toggle(name, pressed));
        inactive.forEach((name) => button.classList.toggle(name, !pressed));
      }
    };
    const status = (element, message) => { if (element) element.textContent = message; };
    const scrollTo = (id) => root.querySelector("#" + id)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });

    function filterGroup(buttonSelector, itemSelector) {
      const buttons = all(buttonSelector);
      const items = all(itemSelector);
      for (const button of buttons) listen(button, "click", () => {
        mark(buttons, button, ["bg-inverse-surface", "text-inverse-on-surface"], ["bg-surface-container", itemSelector.includes("brand") ? "text-secondary" : "text-on-surface-variant"]);
        let visible = 0;
        for (const item of items) {
          item.hidden = button.dataset.filter !== "all" && item.dataset.category !== button.dataset.filter;
          if (!item.hidden) visible++;
        }
        const feedback = root.querySelector("[data-" + (itemSelector.includes("brand") ? "brand" : "vault") + "-status]");
        status(feedback, visible ? visible + " matching " + (itemSelector.includes("brand") ? "brands" : "editions") : "No editions are available in this category. Contact the publications desk to request one.");
      });
    }
    filterGroup(".brand-tab-btn", ".brand-item");
    filterGroup("#vault-filter-container button", "#digital-vault [data-category]");

    const jobs = all(".job-card");
    const departments = all(".dept-btn");
    const locations = all(".loc-btn");
    const jobSearch = root.querySelector("#jobSearchInput");
    let department = "all", location = "all";
    function updateJobs() {
      let visible = 0;
      const query = jobSearch?.value.trim().toLowerCase() || "";
      for (const job of jobs) {
        job.hidden = (department !== "all" && job.dataset.dept !== department) || (location !== "all" && job.dataset.loc !== location) || !job.textContent.toLowerCase().includes(query);
        if (!job.hidden) visible++;
      }
      status(root.querySelector("[data-job-status]"), visible ? visible + " matching " + (visible === 1 ? "opportunity" : "opportunities") : "No roles match these filters. Try a different keyword, department, or location.");
    }
    listen(jobSearch, "input", updateJobs);
    for (const button of departments) listen(button, "click", () => {
      department = button.dataset.filter;
      mark(departments, button, ["bg-inverse-surface", "text-surface-container-lowest"], ["bg-surface-container-low", "text-secondary"]);
      updateJobs();
    });
    for (const button of locations) listen(button, "click", () => {
      location = button.dataset.loc;
      mark(locations, button, ["bg-surface-container-high", "text-on-surface", "font-semibold"], ["bg-surface-container-low", "text-secondary"]);
      updateJobs();
    });
    for (const button of all("[data-apply-role]")) listen(button, "click", () => {
      const select = root.querySelector("#candRole");
      select.value = button.dataset.applyRole;
      scrollTo("apply-section");
      select.focus({ preventScroll: true });
    });
    const resume = root.querySelector("#candResume");
    listen(resume, "change", () => {
      const file = resume.files?.[0];
      const valid = !file || (/\.(pdf|docx?)$/i.test(file.name) && file.size <= 10 * 1024 * 1024);
      resume.setCustomValidity(valid ? "" : "Choose a PDF, DOC, or DOCX file smaller than 10 MB.");
      status(root.querySelector("#fileNameLabel"), file ? (valid ? "Selected: " : "Please replace: ") + file.name : "Attach official PDF dossier or executive résumé");
      if (!valid) resume.reportValidity();
    });

    const serviceTabs = all(".service-tab-btn");
    for (const tab of serviceTabs) listen(tab, "click", () => mark(serviceTabs, tab, ["bg-primary-container", "text-on-primary", "shadow-sm"], ["bg-surface-container", "text-on-surface"]));

    const inquiryTabs = all("#inquiryTabs .tab-btn");
    for (const tab of inquiryTabs) listen(tab, "click", () => {
      mark(inquiryTabs, tab, ["bg-inverse-surface", "text-inverse-on-surface"], ["bg-surface-container", "text-on-surface"]);
      const form = root.querySelector("form");
      if (form) {
        form.dataset.inquiryDivision = tab.textContent.trim();
        form.dataset.email = tab.dataset.email;
        status(form.querySelector("[data-email-desk]"), "Your email draft will be addressed to " + tab.dataset.email + ".");
      }
    });

    // Search, category and year are combined. Sorting keeps the lead release pinned.
    const pressItems = all("[data-press-item]");
    const pressChips = all("#press-filter-chips button");
    const pressSearch = root.querySelector("#press-search-input");
    const pressYear = root.querySelector("#press-year-filter");
    let pressCategory = "all";
    function updatePress() {
      const query = pressSearch?.value.trim().toLowerCase() || "";
      const year = pressYear?.value || "all";
      let visible = 0;
      for (const item of pressItems) {
        const yearMatch = year === "all" || (year === "archive" ? Number(item.dataset.year) < 2024 : item.dataset.year === year);
        item.hidden = !yearMatch || !item.textContent.toLowerCase().includes(query) || (pressCategory !== "all" && !item.dataset.pressCategory.split(" ").includes(pressCategory));
        if (!item.hidden) visible++;
      }
      status(root.querySelector("[data-press-status]"), visible ? visible + " matching releases" : "No releases match these filters. Try another year or search term.");
    }
    if (pressSearch) {
      pressSearch.value = new URLSearchParams(window.location.search).get("q") || "";
      listen(pressSearch, "input", updatePress);
      listen(pressYear, "change", updatePress);
      updatePress();
    }
    for (const chip of pressChips) listen(chip, "click", () => {
      if (chip.dataset.pressFilter === "assets") { scrollTo("brand-assets"); return; }
      if (chip.dataset.pressFilter === "video") { setResource({ title: "MAXX broadcast and video footage", description: "Request exhibition footage, interviews, and broadcast assets from the press desk.", email: "press@maxxmedia.in" }); dialogRef.current.showModal(); return; }
      pressCategory = chip.dataset.pressFilter;
      mark(pressChips, chip, ["bg-inverse-surface", "text-surface-container-lowest"], ["bg-surface-container-low", "text-on-surface"]);
      updatePress();
    });
    const sortButton = root.querySelector("[data-press-sort]");
    let descending = true;
    listen(sortButton, "click", () => {
      descending = !descending;
      const grid = root.querySelector("[data-press-grid]");
      const cards = [...grid.querySelectorAll("article")];
      cards.sort((a, b) => (Number(a.dataset.order) - Number(b.dataset.order)) * (descending ? 1 : -1)).forEach((card) => grid.append(card));
      status(sortButton.querySelector("[data-sort-label]"), descending ? "Latest First" : "Oldest First");
      sortButton.setAttribute("aria-label", descending ? "Sort releases oldest first" : "Sort releases latest first");
    });
    for (const button of all("[data-archive-releases]")) listen(button, "click", () => {
      pressYear.value = "archive";
      updatePress();
      pressYear.focus();
    });

    const galleryChips = all("#gallery-filter-chips button");
    const photos = all("[data-gallery-item]");
    for (const chip of galleryChips) listen(chip, "click", () => {
      mark(galleryChips, chip, ["bg-inverse-surface", "text-surface-container-lowest"], ["bg-surface-container-low", "text-on-surface"]);
      let visible = 0;
      for (const photo of photos) {
        photo.hidden = chip.dataset.photoFilter !== "all" && photo.dataset.photoCategory !== chip.dataset.photoFilter;
        if (!photo.hidden) visible++;
      }
      status(root.querySelector("[data-photo-status]"), visible ? visible + " photos" : "No photos are available for this category. Contact the press desk to request coverage.");
    });
    const selections = all("[data-photo-select]");
    const batch = root.querySelector("[data-photo-batch]");
    const updateSelection = () => {
      const count = selections.filter((checkbox) => checkbox.checked).length;
      if (batch) {
        batch.disabled = count === 0;
        status(batch.querySelector("[data-batch-label]"), "Batch Download Selected (" + count + ")");
      }
    };
    for (const checkbox of selections) listen(checkbox, "change", updateSelection);
    if (batch) {
      updateSelection();
      listen(batch, "click", async () => {
        batch.disabled = true;
        try {
          const urls = selections.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.dataset.photoSelect);
          downloadBlob(await photoArchive(urls), "maxx-press-photos.zip");
          status(root.querySelector("[data-photo-status]"), urls.length + " selected photos downloaded.");
        } catch (error) {
          status(root.querySelector("[data-photo-status]"), error.message);
        } finally { updateSelection(); }
      });
    }

    // Generated exports contain no submission service. Prepare a real email draft.
    for (const form of all("form[data-email]")) listen(form, "submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const lines = [...new FormData(form)].map(([name, value]) => {
        if (value instanceof File) return name + ": " + (value.name || "No file selected");
        return name + ": " + value;
      });
      if (form.dataset.inquiryDivision) lines.unshift("Inquiry division: " + form.dataset.inquiryDivision);
      if (form.querySelector('input[type="file"]')) lines.push("", "Please attach the selected resume to this email before sending.");
      const href = "mailto:" + form.dataset.email + "?subject=" + encodeURIComponent(form.dataset.emailSubject) + "&body=" + encodeURIComponent(lines.join("\n"));
      window.open(href, "_self");
      status(form.querySelector("[data-form-status]"), "Email draft prepared. Send it from your email app to complete your request." + (form.querySelector('input[type="file"]') ? " Attach your selected resume before sending." : ""));
    });

    listen(root, "click", (event) => {
      const trigger = event.target.closest("[data-resource-title]");
      if (!trigger) return;
      event.preventDefault();
      setResource({ title: trigger.dataset.resourceTitle, description: trigger.dataset.resourceDescription || "", email: trigger.dataset.resourceEmail || "info@maxxmedia.in" });
      if (!dialogRef.current.open) dialogRef.current.showModal();
    });
    root.dataset.interactionsReady = "true";
    return () => { delete root.dataset.interactionsReady; controller.abort(); };
  }, []);

  return <div ref={rootRef} data-stitch-interactions="true">
    {children}
    <dialog ref={dialogRef} className="resource-dialog rounded-xl bg-surface-container-lowest p-0 text-on-surface shadow-xl" aria-labelledby="resource-dialog-title">
      <div className="p-space-xl space-y-space-md">
        <div className="flex items-start justify-between gap-space-md">
          <h2 id="resource-dialog-title" className="font-headline-md text-headline-md">{resource.title}</h2>
          <button type="button" onClick={() => dialogRef.current.close()} aria-label="Close resource request" className="rounded-lg p-2 hover:bg-surface-container"><span className="material-symbols-outlined" aria-hidden="true">close</span></button>
        </div>
        {resource.description && <p className="font-body-md text-body-md text-secondary">{resource.description}</p>}
        <p className="font-body-sm text-body-sm">Contact the MAXX desk for the complete publication, file, or assistance with this service.</p>
        <a href={"mailto:" + resource.email + "?subject=" + encodeURIComponent("Request: " + resource.title)} className="inline-flex items-center gap-2 rounded-lg bg-primary-container px-space-lg py-space-sm font-label-md text-on-primary">Request from MAXX<span className="material-symbols-outlined text-[18px]" aria-hidden="true">mail</span></a>
      </div>
    </dialog>
  </div>;
}
