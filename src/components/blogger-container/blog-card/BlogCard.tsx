import { FC } from 'react';
import { BlogPost } from '../../../types';
import "./BlogCard.css";

interface BlogCardProps {
  post: BlogPost;
  onCardClick: (id: string) => void;
}

const BlogCard: FC<BlogCardProps> = ({ post, onCardClick }) => {
  const handleCardClick = () => {
    onCardClick(post.id);
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
          <span>#{post.tags.toLocaleLowerCase()}</span>
        </div>

      </div>
    </div>
  );
}

export default BlogCard;
