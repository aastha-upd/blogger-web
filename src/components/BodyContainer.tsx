import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogPostList from './blogger-container/BlogPostList';
import { NewBlogPostPage } from './new-blog-post-page';
import { useId } from '../hooks/id-provider';
import { BlogPost } from '../types';
import { BlogPostPage } from './blogger-container/blog-post';
import { BloggerFooter, BloggerHeader } from './header-footer';
import { GET_BLOGS } from '../graphql/get-blogs.gql';
import client from '../services/apolloClient';
import "./blogger-container/BlogPostList.css";


const BodyContainer: React.FC = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const [addNew, setAddNew] = useState<Boolean>(false);
    const [currentPage, setCurrentPage] = useState(1);

    //would have been nice to know before hand 
    //but that will need another gql call to get the count
    //so maybe some other day
    //const totalPages = 5;

    //better to have this as a deployment config instead
    //but for now im keeping it here to be accessible 
    //outside code
    const itemsPerPage = process.env.REACT_APP_PAGE_SIZE || 4;

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    useEffect (() => {
      console.log("cache: ", client.extract());
        const data = client
        .query({
          query: GET_BLOGS,
          variables: {
            pageSize: itemsPerPage,
            pageNumber: currentPage,
          },
        })
        .then((result: any) => {
          setBlogPosts(result.data.blogs);
        })
        .catch((error: any) => {
          console.error('Error fetching blogs:', error);
        });
    }, [currentPage, itemsPerPage]);

    const post = id && blogPosts.find(post => post?.id === id);

    const handleAllBlogs = () => {
        setAddNew(false);
        setCurrentPage(1);
        navigate("/");
    }

  return (<>
      {<BloggerHeader onNew={() => setAddNew(true)} onBlogs={handleAllBlogs}/>}
      {!id && !addNew &&
      <>
      <div className="heading">
        <span className="blog-heading"> Blogs </span>
        <span className="tag-line"> Tech. Food. Travel. Education. Lifestyle. Sports.</span>
      </div>
      <BlogPostList 
        posts={blogPosts}
        onCardClick={(id: string) => navigate(`/${id}`)}
        pageNumber={currentPage}
        onNext={nextPage}
        onPrev={prevPage}/>
      </>}
      {id && !addNew && post && <BlogPostPage post={post} />}
      {addNew && <NewBlogPostPage onClose={() => setAddNew(false)}/>}
      <BloggerFooter />
      </>
  );
};

export default BodyContainer;
