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
    const [addNew, setAddNew] = useState<Boolean>(false);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = 5;
    const itemsPerPage = 2;

    const nextPage = () => {
        if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    const goToPage = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
        }
    };

    useEffect (() => {
        console.log("page: ", currentPage);
        const data = client
        .query({
          query: GET_BLOGS,
          variables: {
            pageSize: itemsPerPage,
            pageNumber: currentPage,
          },
        })
        .then((result: any) => {
          console.log("yohoooo: ", result.data.blogs); // Handle the fetched blogs data here
          setBlogPosts(result.data.blogs);
        })
        .catch((error: any) => {
          console.error('Error fetching blogs:', error);
        });
    }, [currentPage, itemsPerPage]);

    const post = id && blogPosts.find(post => post?.id === id);

    const handleAllBlogs = () => {
        setAddNew(false);
        setId("");
        setCurrentPage(1);
    }

  return (<>
      {<BloggerHeader onNew={() => setAddNew(true)} onBlogs={handleAllBlogs}/>}
      {!id && !addNew &&
      <BlogPostList 
        posts={blogPosts}
        onCardClick={(id: string) => setId(id)}
        pageNumber={currentPage}
        onNext={nextPage}
        onPrev={prevPage}/>}
      {id && !addNew && post && <BlogPostPage post={post} />}
      {addNew && <NewBlogPostPage onClose={() => setAddNew(false)}/>}
      </>
  );
};

export default BodyContainer;
