import { video, source } from "./elements";
const toUpdateVideos = () => {
  const events = ["touchstart", "click"];
  events.forEach((eventType) => {
    document.addEventListener(eventType, ({ target }) => {
      const itemOpenVideo = target.closest(".btn-icone");
      if (itemOpenVideo) {
        const data = itemOpenVideo.getAttribute("data-video");
        const title = document.querySelector("[data-titulo]");

        const spanText = itemOpenVideo.querySelector("span");
        if (spanText) {
          const text = spanText.innerText.trim();

          title.innerText = "";
          title.innerText = text;

          title.setAttribute("data-titulo", text);
        }

        if (data) {
          if (video && source) {
            source.src = `${data}.mp4`;
            video.load();
          }
        }
      }
    });
  });
};

export default toUpdateVideos;
