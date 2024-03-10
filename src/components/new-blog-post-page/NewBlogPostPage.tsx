import React, { useState } from 'react';
import { BlogPost, BlogTags } from '../../types';
import './NewBlogPostPage.css';
import client from '../../services/apolloClient';
import { CREATE_BLOG_MUTATION } from '../../graphql/create-blogs.gql';
import { validateBlogPost } from '../../utils/validateInput';
interface NewBlogPostPageProps {
  onClose: () => void;
}

const NewBlogPostPage: React.FC<NewBlogPostPageProps> = ({onClose}) => {
  const initialBlogPostState: Partial<BlogPost> = {
    id: "0",
    title: '',
    image: 'https://via.placeholder.com/400x200?text=default',
    excerpt: '',
    author: '',
    slug: '',
    content: '',
    tags: '',
  };

  const [blogPost, setBlogPost] = useState<Partial<BlogPost>>(initialBlogPostState);
  const [useContentAsExcerpt, setUseContentAsExcerpt] = useState(false);
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
  const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);
  const [selectedTag, setSelectedTag] = useState<BlogTags | null>(null); // State variable to hold the selected tag

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBlogPost({ ...blogPost, [name]: value });
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const tag = value as BlogTags;
    setSelectedTag(e.target.value as BlogTags);
    setBlogPost({...blogPost, tags: tag});
  };

  const handleCheckboxChange = () => {
    const exp = !useContentAsExcerpt ? blogPost.content?.substring(0, 100) : '';
    setBlogPost({ ...blogPost, excerpt: exp });
    setUseContentAsExcerpt(!useContentAsExcerpt);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if(validateBlogPost(blogPost)) {
      client.mutate({
        mutation: CREATE_BLOG_MUTATION,
        variables: {
          ...blogPost
        }
        })
        .then(result => {
          console.log('Blog created successfully:', result.data.createBlog);
          setShowSuccessSnackbar(true);
        })
        .catch(error => {
          console.error('Error creating blog:', error);
          setShowErrorSnackbar(true);
        });
        setTimeout(() => {
          setShowSuccessSnackbar(false);
          setShowErrorSnackbar(false);
          window.location.href = '/';
        }, 2000);
        // Reset form after submission
        setBlogPost(initialBlogPostState);
        setSelectedTag(null);
    }
    else {
      setShowErrorSnackbar(true);
      setTimeout(() => {
        setShowErrorSnackbar(false);
      }, 2000);
    }
  };

  const handleReset = () => {
    // Reset form without submitting
    setBlogPost(initialBlogPostState);
    setSelectedTag(null);
    setUseContentAsExcerpt(false);
  };

  const handleCancel = () => {
    // Navigate to the homepage
    onClose();
  };

  return (
    <div>
      <h2 className="heading">Write a blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-div">
          <label>Title:</label>
          <input type="text" name="title" value={blogPost.title} onChange={handleInputChange} />
        </div>
        <div className="input-div">
          <label>Image URL:</label>
          <input type="text" name="image" value={blogPost.image} onChange={handleInputChange} />
        </div>
        <div className="input-div">
          <label>Author:</label>
          <input type="text" name="author" value={blogPost.author} onChange={handleInputChange} />
        </div>
        <div className="input-div">
          <label>Content:</label>
          <textarea
            name="content"
            value={blogPost.content}
            onChange={handleInputChange}
            rows={20} // Adjust the number of rows as needed
          />
        </div>
        <div className="input-div">
          <label>Excerpt:</label>
          <label className="checkbox-label">
            <input type="checkbox" checked={useContentAsExcerpt} onChange={handleCheckboxChange} /> Use content as excerpt
          </label>
          {!useContentAsExcerpt && <textarea name="excerpt" value={blogPost.excerpt} onChange={handleInputChange} />}
        </div>
        <div className="input-div">
          <label>Tags:</label>
          {Object.values(BlogTags).map((tag: BlogTags) => (
              <label key={tag}>
                <input
                  type="radio"
                  name="tags"
                  value={tag}
                  checked={selectedTag === tag}
                  onChange={handleTagChange}
                />
                {tag}
              </label>
            ))}
        </div>
        <div className="actions">
          <button type="submit">Submit</button>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
          <button type="reset" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
      {showSuccessSnackbar && <div className="snackbar">Your blog has been submitted.</div>}
      {showErrorSnackbar && <div className="redsnackbar">There was an error. Check if you added valid values.</div>}
    </div>
  );
};

export default NewBlogPostPage;
