import React from "react";

const Discography = () => {
  return (
    <div className="discography" id="discography">
      <div className="title">
        <h3>Albums</h3>
      </div>
      <h4>Episode 1</h4>
      <p>April, 2019</p>
      <a href="https://cratediggerband.bandcamp.com/">BandCamp Link</a>

      <ul>
        <li>Drums recorded by Allen Falcon at Industry Ave Studio Nov 2018</li>
        <li>
          Bass and Vocals recorded by Wayne Hays at Scarlet Studios and Booger
          Palace Dec 2018 - Jan 2019{" "}
        </li>
        <li>Guitars recorded by Chris Muench at Booger Palace Nov 2018 </li>
        <li>Mixed By Wayne Hays at Scarlet Studios Jan - Feb 2019</li>
        <li>Mastered by David Perez at Memphis Street Studio</li>
        <li>Artwork and Layout by Christopher Friedman </li>
        <br />
        <li>All music by Crate Digger:</li>
        <li>Wayne Hays - Bass/Vocals</li>
        <li>Justin Hische - Drums</li>
        <li>Chris Muench - Vocals/Guitar</li>
        <br />
        <li>Copyright - all rights reserved</li>
      </ul>
    </div>
  );
};

export default Discography;
