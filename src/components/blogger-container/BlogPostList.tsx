import React from 'react';
import { BlogPost } from '../../types';
import BlogCard from './blog-card/BlogCard';
import "./BlogPostList.css";

interface BlogPostListProps {
  posts: BlogPost[];
  onCardClick: (id: string) => void;
}

const BlogPostList: React.FC<BlogPostListProps> = ({ posts, onCardClick }) => {
  return (
    <div>
    <div className="heading">
        <span className="blog-heading"> Blogs </span>
        <span className="tag-line"> Tech. Food. Travel. Education. Lifestyle. Sports. Business. </span>
    </div>
    <div className="blog-post-list">
      {posts.map((post) => (
        <div className="blog-cards" key={post.id}>
          <BlogCard post={post} onCardClick={onCardClick}/>
        </div>
      ))}
      {

      }
    </div>
    </div>
  );
}

export default BlogPostList;
