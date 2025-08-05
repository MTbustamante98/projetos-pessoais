let currentAudio = null;
let currentGroup = null; // "alarm" ou "ticking"
let currentAudioTicking = null;

export default function playAudio(src, group) {
  if (!src) return;

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = new Audio(src);
  currentGroup = group;
  currentAudio.volume = getInitialVolume(group); // pegar volume atual do input
  currentAudio.play();
}

export function getCurrentAudio() {
  return currentAudio;
}

export function getCurrentGroup() {
  return currentGroup;
}

export function playTickingAudio(src) {
  if (!src) return;

  if (currentAudioTicking) {
    currentAudioTicking.pause();
    currentAudioTicking.currentTime = 0;
  }

  currentAudioTicking = new Audio(src);
  currentAudioTicking.loop = true;
  currentAudio.volume = getInitialVolume("ticking");
  currentAudioTicking.play();
}

export function stopTickingAudio() {
  if (currentAudioTicking) {
    currentAudioTicking.pause();
    currentAudioTicking.currentTime = 0;
  }
}

function getInitialVolume(group) {
  const input = document.querySelector(`#volume-${group}`);
  return input ? input.value / 100 : 1;
}
