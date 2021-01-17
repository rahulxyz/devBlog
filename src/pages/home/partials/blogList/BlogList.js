import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../actions";
import "./BlogList.css";
import face from '../../../../assets/face.png';

class BlogList extends Component {
  state = {};

  componentDidMount() {
    this.props.getBlogList();
  }

  render() {
    const { blogList } = this.props;
    
    return (
      <div className="bloglist-wrapper">
        <div className="container">
        <ul className="bloglist-content">
          
          {blogList.map((item, index) => {
            return (
              <li key={index}>
                <div>
                  <div className="description">
                    <h2>{item.title}</h2>
                    <p>{item.textPreview}</p>
                  </div>
                  <div className="author">
                    <title>Max Payne</title>
                    <p>{item.lastUpdatedAt}</p>
                  </div>
                  </div>
                <img src={face} alt="Image" />       
              </li>
            );
          })}
        </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blogList: state.home.blogList,
  };
};

const mapDispatchToProps = {
  getBlogList: actions.getBlogList,
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
