import React from "react";

import { BlogCard } from "../../Components";
import "./BlogList.css";

function BlogList({ blogPosts }) {
  const renderBlogCards = () => {
    return blogPosts.map(
      (
        { title, timeStamp, category, imageURL, imageALT, description },
        index
      ) => {
        return (
          <BlogCard
            key={index}
            title={title}
            timeStamp={timeStamp}
            category={category}
            imageURL={imageURL}
            imageALT={imageALT}
            description={description}
          />
        );
      }
    );
  };

  return <div>{renderBlogCards()}</div>;
}

export default BlogList;
