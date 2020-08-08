import React from "react";

import { Card, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./AboutCard.css";

function AboutCard() {
  return (
    <Card variant="outlined" className="container">
      <div className="mainContainer">
        <h1 className="mainTitle">About me</h1>
        <p className="mainDetails">
          The rich text element allows you to create and format headings,
          paragraphs, blockquotes, images, and video all in one place instead of
          having to add and format them individually. Just double-click and
          easily create content.
        </p>
        <div className="subContainer">
          <h1 className="subTitle">Something else here</h1>
          <p className="subDetails">
            Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue
            laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus
            porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum id ligula porta felis euismod semper. <br />
            <br />
            Vestibulum id ligula porta felis euismod semper. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec id elit non mi porta gravida at eget metus. Donec ullamcorper
            nulla non metus auctor fringilla.
          </p>
        </div>

        <Link style={{ textDecoration: "none" }} to="/contact">
          <Button className="getInTouch" variant="contained">
            Get in touch
          </Button>
        </Link>
      </div>
    </Card>
  );
}

export default AboutCard;
