import React, { useEffect, useState } from 'react';
import BlogPostList from './blogger-container/BlogPostList';
import { NewBlogPostPage } from './new-blog-post-page';
import { useId } from '../hooks/id-provider';
import { BlogPost } from '../types';
import { BlogPostPage } from './blogger-container/blog-post';
import { BloggerHeader } from './header-footer';
import { GET_BLOGS } from '../graphql/get-blogs.gql';
import client from '../services/apolloClient';

const BodyContainer: React.FC = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const { id, setId } = useId();
    const post = id && blogPosts.find(post => post?.id === id);
    const [addNew, setAddNew] = useState<Boolean>(false);


      
      // Make the GraphQL query


    useEffect (() => {
        const data = client
        .query({
          query: GET_BLOGS,
          variables: {
            pageSize: 13,
            pageNumber: 1,
          },
        })
        .then((result: any) => {
          console.log("yohoooo: ", result.data.blogs); // Handle the fetched blogs data here
          setBlogPosts(result.data.blogs);
        })
        .catch((error: any) => {
          console.error('Error fetching blogs:', error);
        });
    }, []);

    const handleAllBlogs = () => {
        setAddNew(false);
        setId("");
    }

  return (<>
      {<BloggerHeader onNew={() => setAddNew(true)} onBlogs={handleAllBlogs}/>}
      {!id && !addNew && <BlogPostList posts={blogPosts} onCardClick={(id: string) => setId(id)}/>}
      {id && !addNew && post && <BlogPostPage post={post} />}
      {addNew && <NewBlogPostPage onClose={() => setAddNew(false)}/>}
      </>
  );
};

export default BodyContainer;
