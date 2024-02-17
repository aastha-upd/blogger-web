import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { BlogPost } from '../../../types'; // Importing the BlogPost type
//import fetchBlogPost from './api'; // Importing the function to fetch the blog post
import "./BlogPost.css";


const BlogPostPage: React.FC<{post : BlogPost}> = (post) => {
  // const { slug } = useParams<{ slug: string }>(); // Getting the slug from URL params
  // const [blogPost, setBlogPost] = useState<BlogPost | null>(null);

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     try {
  //       const postData = await fetchBlogPost(slug); // Fetching blog post data
  //       setBlogPost(postData);
  //     } catch (error) {
  //       console.error('Error fetching blog post:', error);
  //     }
  //   };

  //   fetchPost();

  //   // Cleanup function
  //   return () => {
  //     // Cleanup code if needed
  //   };
  // }, [slug]);


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
