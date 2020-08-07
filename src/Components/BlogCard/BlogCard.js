import React from "react";
import { Card } from "@material-ui/core";

import "./BlogCard.css";

function BlogCard() {
  return (
    <div>
      <Card className="container" variant="outlined">
        <div className="thumbnail">
          <img
            src="https://uploads-ssl.webflow.com/5f2d76c867914d5d40e5ea3a/5f2d76c867914d41c5e5eac5_photo-1441512673622-3eaa1c39ba28.jpg"
            alt=""
          />
        </div>
        <div className="info">
          <h1>
            Wherever far wow thus a squirrel raccoon jeez jaguar this from along
          </h1>
          <div className="details">
            <h2>AUGUST 7, 2020 |&nbsp;</h2>
            <a href="/">ART</a>
          </div>
          <div className="content">
            <p>
              The copy warned the Little Blind Text, that where it came from it
              would have been rewritten a thousand times and everything that was
              left from its origin would be the word "and" and the Little
              Blind&nbsp;
              <a href="/">Read more...</a>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default BlogCard;
