import React from "react";
import { FaSkyatlas, FaPenSquare } from "react-icons/fa";
import './BloggerHeader.css'

interface HeaderProps {
  onNew: () => void;
  onBlogs: () => void;
}

const BloggerHeader: React.FC<HeaderProps> = ({onNew, onBlogs}) => {
  const onAddNewBlog = () => {
    onNew();
  }

  return (

    <header className="header">
      <div className="left-header">
        <FaSkyatlas className="sky" size={48} onClick={() => {window.location.href = `/`;}}/>
      </div>
      <div className="right-header">
        <button onClick={onBlogs} className="mid">Blogs</button>
        <button onClick={onAddNewBlog} className="write">
          <FaPenSquare size={20} className="pencil"/>
            Write a Blog
        </button>
      </div>
    </header>
  );
};

export default BloggerHeader;