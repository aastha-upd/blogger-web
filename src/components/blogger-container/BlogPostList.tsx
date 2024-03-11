import React from 'react';
import { BlogPost } from '../../types';
import BlogCard from './blog-card/BlogCard';
import "./BlogPostList.css";

interface BlogPostListProps {
  posts: BlogPost[];
  onCardClick: (id: string) => void;
  isLoading: boolean;
}

const BlogPostList: React.FC<BlogPostListProps> = ({ posts, onCardClick, isLoading }) => { 
  
  return (
    <div>
      {/* {pageNumber !== 1 && posts.length == 0 && 
      <div className="no-more">
        No more blogs to show. Please go to previous page.
      </div>} */}
      <div className="blog-post-list">
        {posts.map((post) => (
          <div className="blog-cards" key={post.id}>
            <BlogCard post={post} onCardClick={onCardClick}/>
          </div>
        ))}
        {
          isLoading && <div>
            is Loading....
          </div>
        }
      </div>

      
      {/* <div className="pagination">
        <button className="page" onClick={onPrev} disabled={pageNumber === 1}>Prev</button>
        <button className="page" onClick={onNext} disabled={posts.length === 0}>Next</button>
      </div> */}
    </div>
  );
}

export default BlogPostList;
