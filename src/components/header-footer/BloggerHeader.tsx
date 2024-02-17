import React from "react";
import { FaSkyatlas, FaPenSquare, FaPen } from "react-icons/fa";
import './BloggerHeader.css'
import { useParams } from "react-router-dom";

interface HeaderProps {
  onType: (type: string) => void;
}

const BloggerHeader: React.FC<HeaderProps> = ({ onType}) => {
  const { slug } = useParams<{ slug: string }>();
  const handleType = (type:string) => {
    onType(type);
  };

  const onAddNewBlog = () => {
    window.location.href = '/write-new-blog';
  }

console.log("slug : ", slug);
  return (

    <header className="header">
      <div className="left-header">
        <FaSkyatlas className="sky" size={48} onClick={() => {window.location.href = `/`;}}/>
      </div>
      <div className="right-header">
        {!slug && <button onClick={() => handleType("all")} className="mid">Blogs</button>}
        {!slug && <button onClick={() => handleType("tagged")} className="mid">Tagged</button>}
        {!slug && <button onClick={() => handleType("untagged")} className="mid">UnTagged</button>}
        <button onClick={onAddNewBlog} className="write">
          <FaPenSquare size={20} className="pencil"/>
            Write a Blog
        </button>
      </div>
    </header>
  );
};

export default BloggerHeader;