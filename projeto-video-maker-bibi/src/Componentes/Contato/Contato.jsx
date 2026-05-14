import React from "react";
import Form from "./Form/Form";
import VideoCircularContato from "./VideoCircularContato";
import SlideShowVideos from "./SlideShowVideos";
import Head from "../Helper/Head";

const Contato = () => {
  return (
    <>
      <Head title="Contato | Bibiana Bustamante Filmmaker" />
      <section className="max-[1440px]:max-w-350 min-[1500px]:max-w-400 grid grid-cols-1 xl:grid xl:grid-cols-2 py-30 lg:py-35 xl:pt-10 min-[2560px]:min-w-screen">
        <Form />
        <VideoCircularContato />
      </section>
      <SlideShowVideos />
    </>
  );
};

export default Contato;
