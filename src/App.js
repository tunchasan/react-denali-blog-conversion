import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { blogPosts } from "./Data/blogPosts";
import "./App.css";

import {
  Header,
  AboutCard,
  BlogCard,
  BlogList,
  ContactCard,
  ProfileCard,
} from "./Components";

function App() {
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

  return (
    <div className="app">
      <Router>
        <Header />
        <div className="appContent">
          <div className="appNarrowContainer">
            <div className="appProfile">
              <ProfileCard />
            </div>
            <div className="appPanel">
              <Switch>
                <Route path="/about">
                  <AboutCard />
                </Route>
                <Route path="/contact">
                  <ContactCard />
                </Route>
                <Route path="/">{renderBlogCards()}</Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
