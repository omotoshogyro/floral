import React from "react";
import "./VideoSection.css";

function VideoSection() {
  return (
    <div
      className="videosection"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(videosection-bg.jpg)`,
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="video__contents">
        <h3 className="videosection__header">what we stand for</h3>
        <video id="player" playsinline controls width="1200px">
          <source
            src="https://florahomesgc.com/assets/movies/home_video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}

export default VideoSection;
