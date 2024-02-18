import React, { useState, useEffect } from 'react';
import { BlogPost } from '../../../types';
import "./BlogPost.css";


const BlogPostPage: React.FC<{post : BlogPost}> = (post) => {


  const blogPost = post.post;
  if (!blogPost) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  return (
    <div className="blog-post-page">
      <h1>{blogPost.title}</h1>
      <div className="meta-info">
        <span>By {blogPost.author}</span>
        <span>{blogPost.minRead} min read</span>
        <span>{blogPost.date}</span>
      </div>
      <img className="img" src={blogPost.image} alt={blogPost.title} />
      <p>{blogPost.content}</p>
    </div>
  );
}

export default BlogPostPage;
