import React from "react";
import ImgInstagram from "../assets/instagram-svg.svg?react";
import ImgThreads from "../assets/threds-svg.svg?react";
import ImgEmail from "../assets/email-svg.svg?react";
import ImgTikTok from "../assets/brand-svg.svg?react";

const RedesSociais = () => {
  return (
    <div className="flex gap-7 mt-6">
      <a
        href="https://www.tiktok.com/@bibianabustamantes?_r=1&_t=ZS-93R58KeuNWi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          role="button"
          aria-pressed="false"
          className="size-10 bg-black/35 flex items-center justify-center hover:bg-neutral-1 rounded-md"
        >
          <ImgTikTok className="w-5 h-5" />
        </div>
      </a>
      <a
        href="https://www.instagram.com/bibianabustamante"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          role="button"
          aria-pressed="false"
          className="size-10 bg-black/35 flex items-center justify-center hover:bg-neutral-1 rounded-md"
        >
          <ImgInstagram className="w-7.5 h-7.5" />
        </div>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.threads.com/@bibianabustamante?igshid=NTc4MTIwNjQ2YQ%3D%3D"
      >
        <div
          role="button"
          aria-pressed="false"
          className="size-10 bg-black/35 flex items-center justify-center hover:bg-neutral-1 rounded-md"
        >
          <ImgThreads className="w-5 h-5" />
        </div>
      </a>
      <a href="mailto:exemplo@email.com" rel="noopener noreferrer">
        <div
          role="button"
          aria-pressed="false"
          className="size-10 bg-black/35 flex items-center justify-center hover:bg-neutral-1 rounded-md"
        >
          <ImgEmail className="w-5.5 h-5.5" />
        </div>
      </a>
    </div>
  );
};

export default RedesSociais;
