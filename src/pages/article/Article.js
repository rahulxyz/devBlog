import React, { Component } from "react";
import { connect } from "react-redux";
import "./Article.css";
import Laptop from "../../assets/laptop-mobile.jpeg";
import actions from "./partials/actions";
import { formatDate } from '../../utils/helper';
import Modal from "../../components/modal/Modal";

class Article extends Component {
    state = {};

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getArticleById(id);
    }

    handleUpdate = (formData)=>{
        const {updateBlog} = this.props;
        updateBlog(formData);
      }

    render() {
        const {toggleAdd, addModal, article} = this.props;
        const {title, text, lastUpdatedAt, tags} = article;
        const date = formatDate(lastUpdatedAt);

        return (    
            <div className="article-wrapper">
                <div className="container">
                    <div className="article-content">

                        <div className="article-modal" >
                        {addModal && <Modal toggleAdd={toggleAdd} handleSave={this.handleUpdate}/>}
                        </div>

                        <img
                            className="banner-img"
                            src={Laptop}
                            alt="Article Image"
                        />

                        <div className="article-description">
                            <h1>{title}</h1>
                            <div className="article-author">
                                <p>Max Payne</p>
                                <p>{date}</p>
                            </div>
                            <p className="article-text">{text}</p>
                            <ul className="artcle-tags">
                                {tags?.map(tag=>(
                                    <li>{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        article: state.article,
    };
};

const mapDispatchToProps = {
    getArticleById: actions.getArticleById,
    updateBlog: actions.updateBlog
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
