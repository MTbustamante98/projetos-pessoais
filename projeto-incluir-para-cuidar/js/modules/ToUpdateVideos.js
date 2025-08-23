import { video, source, title } from "./elements";
const toUpdateVideos = () => {
  const events = ["touchstart", "click"];
  events.forEach((eventType) => {
    document.addEventListener(eventType, ({ target }) => {
      const itemOpenVideo = target.closest(".btn-icone");
      if (itemOpenVideo) {
        const data = itemOpenVideo.getAttribute("data-video");
        if (data) {
          source.src = `${data}.mp4`;

          video.load();

          const spanText = itemOpenVideo.querySelector("span");
          if (spanText) {
            const text = spanText.innerText.trim();

            title.innerText = text;

            title.setAttribute("data-titulo", text);
          }
        }
      }
    });
  });
};

export default toUpdateVideos;
