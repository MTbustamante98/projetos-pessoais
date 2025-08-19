const toUpdateVideos = () => {
  const video = document.querySelector("video");
  const source = video.querySelector("source");
 
  document.addEventListener("click", ({ target }) => {
    const itemOpenVideo = target.closest(".btn-icone");
    if (itemOpenVideo) {
      const data = itemOpenVideo.getAttribute("data-video");
      if (data) {
        source.src = `./${data}.mp4`;

        video.load();
        video.play();
      }
    }
  });
};

export default toUpdateVideos;
