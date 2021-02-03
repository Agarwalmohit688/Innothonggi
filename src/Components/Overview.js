import React from "react";
import ReactPlayer from 'react-player'

function Overview() {
  return (
    <div className="overview">
      <div className="overview-content">
        <h1>Overview of Innothon 2021</h1>
        <p>
          Innothon 2021 is a nationwide initiative to provide students a
          platform to solve some of the pressing problems we face in our daily
          lives, and thus inculcate a culture of product innovation and a
          mindset of problem solving.
        </p>
      </div>
      <div className="video">
      <ReactPlayer width="100%" height="280px" controls url="https://youtu.be/UppOgIV11Qg" className="videoplayer"/>

      </div>
    </div>
  );
}

export default Overview;
