const toUpdateVideos = () => {
  const video = document.querySelector("video");
  const source = video.querySelector("source");
  const title = document.querySelector("[data-titulo]");
  console.log(title);
  document.addEventListener("click", ({ target }) => {
    const itemOpenVideo = target.closest(".btn-icone");
    if (itemOpenVideo) {
      const data = itemOpenVideo.getAttribute("data-video");
      if (data) {
        source.src = `./${data}.mp4`;

        video.load();
        video.play();

        title.innerText = target.innerText;
      }
    }
  });
};

export default toUpdateVideos;
