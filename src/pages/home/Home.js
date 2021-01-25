import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../../components/modal/Modal";
import "./Home.css";
import actions from './partials/actions';
import Banner from "./partials/banner/Banner";
import BlogList from "./partials/blogList/BlogList";
import { addBlog } from "./partials/operations";



class Home extends Component {
  state = {};

  handleSave = (formData)=>{
    const {addBlog} = this.props;
    addBlog(formData);
  }

  render() {
    const {toggleAdd, addModal} = this.props;

    return (
      <div className="home-wrapper">
          <div className="home-content">
          {addModal && <Modal toggleAdd={toggleAdd} handleSave={this.handleSave}/>}
          <Banner />
          <BlogList /> 
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addBlog: actions.addBlog,
};

export default connect(null, mapDispatchToProps)(Home);
