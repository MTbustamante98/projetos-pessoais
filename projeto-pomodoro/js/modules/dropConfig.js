import { active } from "./utilitaries.js";
import {
  innerTextLiDrop,
  alarmVolumeSpan,
  tickingVolumeSpan,
  volumeAlarm,
  volumeTicking,
} from "./dropConfigElements.js";
import playAudio from "./audios.js";
import { getCurrentAudio, getCurrentGroup, saveVolumeUI } from "./audios.js";

export default function initDropConfig() {
  const savedTexts = JSON.parse(localStorage.getItem("dropdownTexts")) || {};
  const callback = (e) => {
    const itemsOpenMenu = e.target.closest(".activeDropDownChoose");
    if (!itemsOpenMenu) return;

    const id = itemsOpenMenu.getAttribute("data-toggle-drop");
    const drop = document.querySelector(`[data-drop="${id}"]`);
    if (drop) drop.classList.toggle(active);
  };

  innerTextLiDrop.forEach((liText) => {
    liText.addEventListener("click", (e) => {
      const target = e.target;
      const parentDrop = target.closest("[data-drop]");
      if (!parentDrop) return;

      const id = parentDrop.getAttribute("data-drop");
      const toggleDrop = document.querySelector(`[data-toggle-drop="${id}"]`);
      if (!toggleDrop) return;

      const span = toggleDrop?.querySelector(".format-innerText");
      if (span) span.innerText = e.currentTarget.innerText;

      const dataMusic = target.dataset.music;
      const group =
        target.closest("[data-drop]").dataset.drop === "alarm-sound"
          ? "alarm"
          : "ticking";
      if (dataMusic !== undefined && dataMusic !== "")
        playAudio(dataMusic, group);

      const drop = document.querySelectorAll("[data-drop]");
      drop.forEach((dropDown) => {
        if (dropDown.classList.contains(active))
          dropDown.classList.remove(active);
      });

      savedTexts[id] = span.innerText;
      localStorage.setItem("dropdownTexts", JSON.stringify(savedTexts));
    });

    Object.entries(savedTexts).forEach(([id, value]) => {
      const toggleDrop = document.querySelector(`[data-toggle-drop="${id}"]`);
      if (!toggleDrop) return;

      const span = toggleDrop.querySelector(".format-innerText");
      if (span) span.innerText = value;
    });
  });

  document.addEventListener("click", (e) => {
    let clickInside = false;
    document
      .querySelectorAll("[data-toggle-drop], [data-drop]")
      .forEach((el) => {
        if (el.contains(e.target)) clickInside = true;
      });

    if (!clickInside) {
      document.querySelectorAll("[data-drop]").forEach((drop) => {
        drop.classList.remove(active);
      });
    }
  });
  //DELEGAÇÃO DE EVENTOS
  document.addEventListener("click", callback);

  volumeAlarm.addEventListener("input", () => {
    const value = Number(volumeAlarm.value);
    alarmVolumeSpan.textContent = volumeAlarm.value;
    saveVolume("alarm", value);

    if (getCurrentGroup() === "alarm") {
      const audio = getCurrentAudio();
      const volume = volumeAlarm.value / 100;
      if (audio) audio.volume = volume;
    }
  });

  volumeTicking.addEventListener("input", () => {
    const value = Number(volumeTicking.value);
    tickingVolumeSpan.textContent = volumeTicking.value;
    saveVolume("ticking", value);

    if (getCurrentGroup() === "ticking") {
      const audio = getCurrentAudio();
      const volume = volumeTicking.value / 100;
      if (audio) audio.volume = volume;
    }
  });

  function getSavedVolumes() {
    const saved = localStorage.getItem("volumes");
    return saved ? JSON.parse(saved) : { alarm: 100, ticking: 100 };
  }

  function saveVolume(group, value) {
    const volumes = getSavedVolumes();
    volumes[group] = value;
    localStorage.setItem("volumes", JSON.stringify(volumes));
  }

  const saved = getSavedVolumes();
  saveVolumeUI("alarm", saved.alarm);
  saveVolumeUI("ticking", saved.ticking);
}
