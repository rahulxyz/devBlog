import React, { Component } from "react";
import { connect } from "react-redux";
import "./Article.css";
import Laptop from "../../assets/laptop-mobile.jpeg";
import actions from "./partials/actions";

class Article extends Component {
    state = {};

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getArticleById(id);
    }

    render() {
        const {title, text, lastUpdatedAt, tags} = this.props.article;
        return (
            <div className="article-wrapper">
                <div className="container">
                    <div className="article-content">
                        <img
                            className="banner-img"
                            src={Laptop}
                            alt="Article Image"
                        />

                        <div className="article-description">
                            <h1>{title}</h1>
                            <div className="article-author">
                                <p>Max Payne</p>
                                <p>{lastUpdatedAt}</p>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
