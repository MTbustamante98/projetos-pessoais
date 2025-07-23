let audio = null;
export default function playAudio(src) {
  if (!src) return;

  if (audio && audio.currentTime > 0) {
    audio.pause();
    audio.currentTime = 0;
  }

  audio = new Audio(src);
  audio.play();
}
