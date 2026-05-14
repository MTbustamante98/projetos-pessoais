import ShortVideo from "../ShortVideo";
const VideoCircularContato = () => {
  return (
    <div className="flex justify-center mt-8 md:mt-16 min-[2560px]:justify-self-center">
      <div className="w-[clamp(22rem,53vw,42rem)] aspect-square rounded-full overflow-hidden">
        <ShortVideo
          source="/videos/short-circular-contato.mp4"
          className="w-full h-[clamp(22rem,53vw,42rem)] object-cover"
        />
      </div>
    </div>
  );
};

export default VideoCircularContato;
