import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { blogPosts, featuredPosts } from "./Data/blogPosts";
import "./App.css";

import {
  Header,
  AboutCard,
  BlogList,
  ContactCard,
  ProfileCard,
} from "./Components";

function App() {
  const [postLink, setPostLink] = useState("");

  const onPostClick = (link) => {
    setPostLink(link);
  };

  return (
    <div className="app">
      <Router>
        <Header />
        <div className="appContent">
          <div className="appNarrowContainer">
            <div className="appProfile">
              <ProfileCard featuredPosts={featuredPosts} />
            </div>
            <div className="appPanel">
              <Switch>
                {postLink && <Route path={`/${postLink}`}>{postLink}</Route>}
                <Route path="/about">
                  <AboutCard />
                </Route>
                <Route path="/contact">
                  <ContactCard />
                </Route>
                <Route path="/">
                  <BlogList blogPosts={blogPosts} onPostClick={onPostClick} />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
