import React, { useState } from 'react';
import { BlogPost, BlogTags } from '../../types';
import './NewBlogPostPage.css';

const NewBlogPostPage: React.FC = () => {
  const initialBlogPostState: Partial<BlogPost> = {
    id: 0,
    title: '',
    image: '',
    excerpt: '',
    author: '',
    slug: '',
    content: '',
    tags: [],
  };

  const [blogPost, setBlogPost] = useState<Partial<BlogPost>>(initialBlogPostState);
  const [selectedTags, setSelectedTags] = useState<BlogTags[]>([]);
  const [useContentAsExcerpt, setUseContentAsExcerpt] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBlogPost({ ...blogPost, [name]: value });
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const tag = value as BlogTags;
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((prevTag) => prevTag !== tag)
        : [...prevTags, tag]
    );
  };

  const handleCheckboxChange = () => {
    setUseContentAsExcerpt(!useContentAsExcerpt);
    if (!useContentAsExcerpt) {
      setBlogPost({ ...blogPost, excerpt: blogPost.content?.substring(0, 100) });
    } else {
      setBlogPost({ ...blogPost, excerpt: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform submission logic here, e.g., send data to backend
    console.log('Submitted:', blogPost);
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
      handleCancel();
    }, 2000);

    // Reset form after submission
    setBlogPost(initialBlogPostState);
    setSelectedTags([]);
  };

  const handleReset = () => {
    // Reset form without submitting
    setBlogPost(initialBlogPostState);
    setSelectedTags([]);
    setUseContentAsExcerpt(false);
  };

  const handleCancel = () => {
    // Navigate to the homepage
    window.location.href = '/';
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
            <label className="checkbox-label" key={tag}>
              <input
                type="checkbox"
                name="tags"
                value={tag}
                checked={selectedTags.includes(tag)}
                onChange={handleTagChange}
              />{' '}
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
      {showSnackbar && <div className="snackbar">Your blog has been submitted.</div>}
    </div>
  );
};

export default NewBlogPostPage;
