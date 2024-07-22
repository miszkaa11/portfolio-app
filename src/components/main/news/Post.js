// src/components/news/PostDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
// Sass
import "./Post.scss";
// Data
import newsItems from './Data';
// Title
import Title from "../../parts/Title";

const Post = () => {
    const { id } = useParams();
    const post = newsItems.find(item => item.id === id);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="post">
            <Title title={post.title} className="secondary" direction="left"/>
            <div className="container-s">
                <div className="post__content">
                    <div className="post__top">
                        <img src={post.thumbnail} className="post__thumbnail" alt={post.title}/>
                    </div>
                    <div className="post__entry">
                    <p className="post__text">{post.content}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Post;