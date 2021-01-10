import React, { Component } from "react";
import "./Home.css";
import Banner from "./partials/banner/Banner";
import BlogList from "./partials/blogList/BlogList";



class Home extends Component {
  state = {};

  render() {
    return (
      <div className="home-wrapper">
        <div className="container">
          <div className="home-content">
          <Banner />
          {/* <BlogList /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
