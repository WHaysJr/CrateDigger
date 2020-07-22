/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-expressions */
import React from "react";

const divStyle = {
  border: 0,
  width: 350,
  height: 588,
};

const Audio = () => {
  return (
    <div className="audio" id="audio">
      <div className="title">
        <h3>Audio</h3>
        <br />
        <br />
        {/* <div dangerouslySetInnerHTML={this.iframe()} /> */}
        <iframe
          style={divStyle}
          src="https://bandcamp.com/EmbeddedPlayer/album=697647171/size=large/bgcol=333333/linkcol=ffffff/transparent=true/"
          seamless
        >
          <a href="http://cratediggerband.bandcamp.com/album/episode-1">
            Episode 1 by Crate Digger
          </a>
        </iframe>
      </div>
    </div>
  );
};

export default Audio;
