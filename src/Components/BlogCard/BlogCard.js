import React from "react";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getSlugURL } from "../../helper";

import "./BlogCard.css";

function BlogCard({
  title,
  timeStamp,
  category,
  imageURL,
  imageALT,
  description,
  onPostClick,
}) {
  return (
    <div>
      <Card className="container" variant="outlined">
        <div className="thumbnail">
          <img src={imageURL} alt={imageALT} />
        </div>
        <div className="info">
          <Link onClick={() => onPostClick(title)} to={`/${getSlugURL(title)}`}>
            {title}
          </Link>
          <div className="details">
            <h2>{timeStamp} |&nbsp;</h2>
            <Link to="/">{category}</Link>
          </div>
          <div className="content">
            <p>
              {description}&nbsp;
              <Link to={`/${getSlugURL(title)}`}>Read more...</Link>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default BlogCard;
