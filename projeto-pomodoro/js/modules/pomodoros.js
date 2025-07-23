import {
  pomodoros,
  buttonStartTimer,
  progressBar,
  divChoose,
  choose,
  timeInputs,
  timerElements,
  visibleTimer,
  getTimerByType,
  getTypeButton,
} from "./pomodoroTimerElements.js";

import { active } from "./utilitaries.js";
import { innerTextLiDrop } from "./dropConfigElements.js";
import  playAudio  from "./audios.js";

export default function initPomodoros() {
  let InnerTextTimers = JSON.parse(localStorage.getItem("timers")) || [];
  const tempoPersonalizado = {
    pomodoro: "25:00",
    short: "05:00",
    long: "15:00",
  };

  function SaveTimersLocalStorage() {
    const lastItem = InnerTextTimers[InnerTextTimers.length - 1];
    for (let key in lastItem) {
      const timerElement = getTimerByType(key);
      if (timerElement) {
        timerElement.innerText = lastItem[key];
        tempoPersonalizado[key] = lastItem[key];
      }
    }
  }

  const timerState = {
    totalSeconds: 0,
    tempoInicial: 0,
    isRunning: false,
    interval: null,
  };

  let audioPathSelected = null;
  innerTextLiDrop.forEach((li) => {
    li.addEventListener("click", (e) => {
      const path = e.target.dataset.music;
      if (path) audioPathSelected = path;
    });
  })

  function startCountDown() {
    const currentTimer = visibleTimer();
    const type = currentTimer.dataset.timerType;
    const tempo = tempoPersonalizado[type];
    
    if (!timerState.isRunning && timerState.totalSeconds === 0) {
      const [minutes, seconds] = currentTimer.innerText.split(":").map(Number);
      timerState.totalSeconds = minutes * 60 + seconds;
      timerState.tempoInicial = timerState.totalSeconds;
    }

    if (!timerState.isRunning) {
      timerState.isRunning = true;
      buttonStartTimer.innerText = "PAUSAR";
      buttonStartTimer.classList.add(active);
      buttonStartTimer.classList.remove("special-class");

      timerState.interval = setInterval(() => {
        if (timerState.totalSeconds <= 0) {
          timerState.isRunning = false;
          buttonStartTimer.innerText = "COMEÇAR";
          progressBar.style.width = "0";
          currentTimer.innerText = tempo;
          clearInterval(timerState.interval);

          autoStartPomodorosLogic();
        
          if (audioPathSelected) playAudio(audioPathSelected);

          return;
        }

        const progress =
          ((timerState.tempoInicial - timerState.totalSeconds) /
            timerState.tempoInicial) *
          100;
        progressBar.style.width = `${progress}%`;

        timerState.totalSeconds--;
        const min = Math.floor(timerState.totalSeconds / 60);
        const sec = timerState.totalSeconds % 60;
        currentTimer.innerText = `${min.toString().padStart(2, "0")}:${sec
          .toString()
          .padStart(2, "0")}`;
      }, 50);
    } else {
      timerState.isRunning = false;
      clearInterval(timerState.interval);
      buttonStartTimer.innerText = "COMEÇAR";
      buttonStartTimer.classList.remove(active);
    }
  }

  function changeTimerWhenModifyValue() {
    timeInputs.forEach((el) => {
      el.addEventListener("input", (e) => {
        const type = e.target.dataset.value.replace("Timer", "");
        const value = e.target.value;
        if (!value.trim()) return;

        tempoPersonalizado[type] = `${value.toString().padStart(2, "0")}:00`;

        const targetTimer = getTimerByType(type);
        InnerTextTimers.push({ ...tempoPersonalizado });
        localStorage.setItem("timers", JSON.stringify(InnerTextTimers));

        if (targetTimer && !targetTimer.classList.contains("hidden")) {
          targetTimer.innerText = tempoPersonalizado[type];
        }
      });
      SaveTimersLocalStorage();
    });
  }

  changeTimerWhenModifyValue();

  const cycle = ["pomodoro", "short"];
  let currentIndex = 0;

  function loadAutoStartState() {
    const state = JSON.parse(localStorage.getItem("state"));
    if (state) {
      divChoose.classList.toggle(active, state.divChooseActive);
      choose.classList.toggle(active, state.chooseActive);
    }
  }

  function autoStartPomodorosLogic() {
    if (divChoose.classList.contains(active)) {
      currentIndex++;
      currentIndex = currentIndex >= cycle.length ? 0 : currentIndex;
      choosePomodoro(cycle[currentIndex]);
      buttonStartTimer.classList.add("special-class");
    }
  }

  function autoStartPomodorosUI() {
    divChoose.classList.toggle(active);
    choose.classList.toggle(active);

    const state = {
      divChooseActive: divChoose.classList.contains(active),
      chooseActive: choose.classList.contains(active),
    };
    localStorage.setItem("state", JSON.stringify(state));
  }

  function choosePomodoro(e) {
    const type = typeof e === "string" ? e : e.target.dataset.type;
    const targetTimer = getTimerByType(type);

    pomodoros.forEach((el) => el.classList.remove(active));

    if (typeof e !== "string") {
      e.target.classList.add(active);
    } else {
      const targetButton = getTypeButton(type);
      if (targetButton) targetButton.classList.add(active);
    }

    timerElements().forEach((el) => el.classList.add("hidden"));

    if (targetTimer) {
      targetTimer.classList.remove("hidden");
      targetTimer.innerText = tempoPersonalizado[type];

      const documentBody = document.body;
      if (type === "pomodoro") {
        documentBody.style.backgroundColor = "var(--tomato)";
      } else if (type === "short") {
        documentBody.style.backgroundColor = "var(--backgroundShortBreak)";
      } else if (type === "long") {
        documentBody.style.backgroundColor = "var(--backgroundLongBreak)";
      }
    }
  }

  loadAutoStartState();
  divChoose.addEventListener("click", autoStartPomodorosUI);
  buttonStartTimer.addEventListener("click", startCountDown);
  pomodoros.forEach((el) => el.addEventListener("click", choosePomodoro));
  if (pomodoros.length) pomodoros[0].classList.add(active);
}
