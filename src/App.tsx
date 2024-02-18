import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import { BlogPost, BlogTags } from './types';
import  { BlogPostPage } from './components/blogger-container/blog-post';
import { BloggerHeader, BloggerFooter } from './components/header-footer';
import { BlogPostList } from './components/blogger-container';
import { NewBlogPostPage } from './components/new-blog-post-page';
const mockblogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Blog Post 1",
    image: "https://via.placeholder.com/400x200?text=Image+1",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Doe",
    date: "2024-02-17",
    slug: "blog-post-1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    minRead: 5,
    tags: [BlogTags.TECH, BlogTags.TRAVEL],
  },
  {
    id: 2,
    title: "Blog Post 2",
    image: "https://via.placeholder.com/400x200?text=Image+2",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Jane Doe",
    date: "2024-02-16",
    slug: "blog-post-2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    minRead: 7,
    tags: [BlogTags.FOOD, BlogTags.LIFE],
  },
  {
    id: 3,
    title: "Blog Post 3",
    image: "https://via.placeholder.com/400x200?text=Image+3",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Alice Smith",
    date: "2024-02-15",
    slug: "blog-post-3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    minRead: 6,
    tags: [BlogTags.BUSINESS, BlogTags.TECH],
  },
  {
    id: 4,
    title: "Blog Post 4",
    image: "https://via.placeholder.com/400x200?text=Image+4",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Bob Johnson",
    date: "2024-02-14",
    slug: "blog-post-4",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    minRead: 8,
    tags: [BlogTags.LIFE, BlogTags.TRAVEL],
  },
  {
    id: 5,
    title: "Blog Post 5",
    image: "https://via.placeholder.com/400x200?text=Image+5",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Emily Brown",
    date: "2024-02-13",
    slug: "blog-post-5",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    minRead: 4,
    tags: [BlogTags.FOOD],
  },
  {
    id: 6,
    title: "Blog Post 6",
    image: "https://via.placeholder.com/400x200?text=Image+6",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Michael Wilson",
    date: "2024-02-12",
    slug: "blog-post-6",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    minRead: 10,
    tags: [BlogTags.EDU, BlogTags.TECH],
  },
  {
    id: 7,
    title: "Blog Post 7",
    image: "https://via.placeholder.com/400x200?text=Image+7",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Sarah Jones",
    date: "2024-02-11",
    slug: "blog-post-7",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    minRead: 3,
    tags: [BlogTags.POLITICS, BlogTags.ENVIRONMENT],
  },
  {
    id: 8,
    title: "Blog Post 8",
    image: "https://via.placeholder.com/400x200?text=Image+8",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "David Lee",
    date: "2024-02-10",
    slug: "blog-post-8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    minRead: 9,
    tags: [],
  },
  {
    id: 9,
    title: "Blog Post 9",
    image: "https://via.placeholder.com/400x200?text=Image+9",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Emma Garcia",
    date: "2024-02-09",
    slug: "blog-post-9",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    minRead: 6,
    tags: [BlogTags.SPORTS],
  },
  {
    id: 10,
    title: "Blog Post 10",
    image: "https://via.placeholder.com/400x200?text=Image+10",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Daniel Miller",
    date: "2024-02-08",
    slug: "blog-post-10",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    minRead: 7,
    tags: [BlogTags.TECH, BlogTags.BUSINESS],
  },
  // Add more blog posts as needed
];



const App: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState(mockblogPosts);

    const handlOnType = (type: string) => {
      if(type === "untagged") {
        setBlogPosts(mockblogPosts.filter((blog)=> {
          console.log(blog.tags.length);
          if(blog.tags.length === 0) return blog;
        }));
      }
      else if(type === "tagged") {
        setBlogPosts(mockblogPosts.filter((blog)=> {
          if(blog.tags.length > 0) return blog;
        }));
      }
      else {setBlogPosts(mockblogPosts);}
    }

    const BlogPostRoute = () => {
      const { slug } = useParams<{ slug: string }>();
      const post = blogPosts.find(post => post.slug === slug);
      if (!post) {
          return <div>Post not found</div>;
      }
      return <BlogPostPage post={post}/>;
    }

    console.log(blogPosts);

    return (
      <Router basename="/blogger-web">
        <div>
          <BloggerHeader onType={handlOnType}/>
          
          <Routes>
            <Route path="/" element={<BlogPostList posts={blogPosts}/>} />
            <Route path="/blog/:slug" element={<BlogPostRoute />} />
            <Route path="/write-new-blog" element={<NewBlogPostPage />} />
          </Routes>
          <BloggerFooter />
        </div>
      </Router>
    );
}

export default App;
