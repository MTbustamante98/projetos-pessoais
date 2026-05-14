import React from "react";

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMedia() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMedia();
    window.addEventListener("resize", changeMedia);

    return () => removeEventListener("resize", changeMedia);
  }, [media, setMatch]);

  return match;
};

export default useMedia;
