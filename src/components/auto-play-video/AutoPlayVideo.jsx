"use client";

import Video from "next-video";
import videoMP2 from "../../../videos/videp.mp4";

export default function AutoPlayVideo() {

  return (
    <div className="w-[848px] h-[447px]">
      <Video src={videoMP2} />
    </div>
  );
}
