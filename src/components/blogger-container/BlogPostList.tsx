import React from 'react';
import { BlogPost } from '../../types';
import BlogCard from './blog-card/BlogCard';
import "./BlogPostList.css";

interface BlogPostListProps {
  posts: BlogPost[];
  onCardClick: (id: string) => void;
  pageNumber: number;
  onNext: () => void;
  onPrev: () => void;
}

const BlogPostList: React.FC<BlogPostListProps> = ({ posts, onCardClick, pageNumber, onNext, onPrev }) => {

  return (
    <div>
      <div className="heading">
        <span className="blog-heading"> Blogs </span>
        <span className="tag-line"> Tech. Food. Travel. Education. Lifestyle. Sports.</span>
      </div>
      <div className="blog-post-list">
        {posts.map((post) => (
          <div className="blog-cards" key={post.id}>
            <BlogCard post={post} onCardClick={onCardClick}/>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="page" onClick={onPrev} disabled={pageNumber === 1}>Prev</button>
        <button className="page" onClick={onNext} disabled={posts.length === 0}>Next</button>
      </div>
    </div>
  );
}

export default BlogPostList;
