import React from "react";
import { Card, Avatar, Typography as p } from "@material-ui/core";
import { Facebook, Instagram, Twitter, LinkedIn } from "@material-ui/icons";

import "./ProfileCard.css";

function ProfileCard() {
  return (
    <div>
      <Card className="profileCard" variant="outlined">
        <div className="avatarContainer">
          <Avatar
            className="avatar"
            alt="Profile-Picture"
            src="https://uploads-ssl.webflow.com/5f2d76c8a5805a8656418f3d/5f2d76c867914d9284e5ea3e_photo-1443180236447-432ea00e6ead.jpg"
          />
        </div>

        <p className="profileText">
          Denali is a simple responsive blog template. Easily add new posts
          using the Editor or change layout and design using the Designer.
        </p>

        <div className="underlineSeperator"></div>

        <p className="profileText">Featured Posts:</p>

        <div className="blogPostsContainer">
          <a className="profileBlogPost">
            According a funnily until pre-set or arrogant well cheerful
          </a>

          <a className="profileBlogPost">
            Overlaid the jeepers uselessly much excluding
          </a>
        </div>

        <div className="underlineSeperator"></div>

        <div className="socialContianer">
          <a href="http://www.facebook.com" target="_blank">
            <Facebook className="socialIcon" />
          </a>
          <a href="http://www.facebook.com" target="_blank">
            <Instagram className="socialIcon" />
          </a>
          <a href="http://www.facebook.com" target="_blank">
            <Twitter className="socialIcon" />
          </a>
          <a href="http://www.facebook.com" target="_blank">
            <LinkedIn className="socialIcon" />
          </a>
        </div>

        <div className="builtWithSection">
          <p className="profileBuiltByText">BUILT WITH&nbsp;</p>
          <p className="profileBuiltByTextLink">HASO-GOKO</p>
        </div>
      </Card>
    </div>
  );
}

export default ProfileCard;
