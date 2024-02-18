import React, { useState } from 'react';
import BlogPostList from './blogger-container/BlogPostList';
import { NewBlogPostPage } from './new-blog-post-page';
import { useId } from '../hooks/id-provider';
import { BlogPost } from '../types';
import { BlogPostPage } from './blogger-container/blog-post';
import { BloggerHeader } from './header-footer';

const BodyContainer: React.FC<{blogPosts: BlogPost[]}> = (blogPosts) => {
    const { id, setId } = useId();
    const post = id && blogPosts.blogPosts.find(post => post.id === id);
    const [addNew, setAddNew] = useState<Boolean>(false);

    const handleAllBlogs = () => {
        setAddNew(false);
        setId("");
    }

  return (<>
      {<BloggerHeader onNew={() => setAddNew(true)} onBlogs={handleAllBlogs}/>}
      {!id && !addNew && <BlogPostList posts={blogPosts.blogPosts} onCardClick={(id: string) => setId(id)}/>}
      {id && !addNew && post && <BlogPostPage post={post} />}
      {addNew && <NewBlogPostPage onClose={() => setAddNew(false)}/>}
      </>
  );
};

export default BodyContainer;
