import React, { FC, useState } from 'react';
import { BlogPost } from '../../types';
import BlogPostPage from './blog-post/BlogPost';
import BlogCard from './blog-card/BlogCard';
import "./BlogPostList.css";

interface BlogPostListProps {
  posts: BlogPost[];
}

const BlogPostList: FC<BlogPostListProps> = ({ posts }) => {
  const [selectedBlogId, setSelectedBlogId] = useState();

  return (
    <div>
    <div className="heading">
        <span className="blog-heading"> Blogs </span>
        <span className="tag-line"> Tech. Food. Travel. Education. Lifestyle. Sports. Business. </span>
    </div>
    <div className="blog-post-list">
      
      {posts.map((post, index) => (
        <div className="blog-cards">
          <BlogCard post={post}/>
        </div>
      ))}
      {

      }
    </div>
    </div>
  );
}

export default BlogPostList;
