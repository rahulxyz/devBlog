import React,{useState} from 'react';
import { Switch, Route } from "react-router-dom";
import {connect} from "react-redux";

import Home from "./pages/home/Home";
import Article from "./pages/article/Article";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Loader from "./components/loader/Loader";
import Modal from './components/modal/Modal';

function App(props) {

  const [addModal, setAddModal] =  useState(false);

  const toggleAdd = (show)=>{
    setAddModal(show);
  }

  return (
    <div className="App">
      {props.loaderVisible && <Loader />}
      <Navbar toggleAdd={toggleAdd}/>
      <Switch>  
        <Route path="/api/feed/newsFeed/:id" render={(props)=> <Article addModal={addModal} toggleAdd={toggleAdd} {...props}/>} />
        <Route path="/login" component={Login}/>
        <Route path="/" render={()=> <Home addModal={addModal} toggleAdd={toggleAdd}/>} />
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = state=>{
  return {
    loaderVisible: state.loader.visible
  }
}

export default connect(mapStateToProps,null)(App);
