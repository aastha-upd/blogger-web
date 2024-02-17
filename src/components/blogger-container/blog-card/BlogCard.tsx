import React, { FC } from 'react';
import { BlogPost, BlogTags } from '../../../types'; // Assuming you have defined a BlogPost type and BlogTags enum
import "./BlogCard.css";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: FC<BlogCardProps> = ({ post }) => {

  const handleCardClick = () => {
    // Navigate to the specified href when card is clicked
    window.location.href = `/blog/${post.slug}`;
  };

  return (
    <div className="blog-card"  onClick={handleCardClick}>
      <div className="blog-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="card-text">
        <div className="blog-info">
          <h3>{post.title}</h3>
          <div className="meta-info">
          <span> ~ {post.minRead} min read</span>
        </div>
        </div>
        <p className="excerpt">{post.excerpt}</p>
        <div className="meta-info">
          <span>{post.author} on {post.date}  </span>
          <div className="tags">
          {post.tags?.map(tag => (
            <span key={tag} className="tag">#{tag.toLocaleLowerCase()}</span>
          ))}
        </div>
        </div>

      </div>
    </div>
  );
}

export default BlogCard;
