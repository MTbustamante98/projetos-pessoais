import activeSimpleAnime from "./modules/SimpleAnimeActive";
import activeDropDivs from "./modules/ActiveDropDivs";
import toUpdateVideos from "./modules/ToUpdateVideos";
import activeModal from "./modules/ActiveModal";
import updateVideoImg from "./modules/updateVideoAndImg";

activeDropDivs();
activeSimpleAnime();
toUpdateVideos();
document.addEventListener("DOMContentLoaded", () => {
  activeModal();
});
updateVideoImg();
