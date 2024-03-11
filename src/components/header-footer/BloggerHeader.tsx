import React, { useState } from "react";
import { FaSkyatlas, FaPenSquare } from "react-icons/fa";
import './BloggerHeader.css'
import { dark, light, store } from "../../state/store";
import { useSelector } from "react-redux";

interface HeaderProps {
  onNew: () => void;
  onBlogs: () => void;
}

const BloggerHeader: React.FC<HeaderProps> = ({onNew, onBlogs}) => {
  const [selectedTheme, setSelectedTheme] = useState(useSelector((state : any) => state.theme));

  store.subscribe(() => {
      setSelectedTheme(store.getState().value);

      console.log("selectredtheme: ", selectedTheme);
      console.log("here" , store.getState());
      }
    )



  const onAddNewBlog = () => {
    onNew();
  }

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value === "dark") store.dispatch(dark());
    else store.dispatch(light());
  };

  return (

    <header className={selectedTheme}>
      <div className="left-header">
        <FaSkyatlas className="sky" size={48} onClick={() => {window.location.href = `/`;}}/>
        <label key={"theme"} className="theme-btns">
                Light
                <input
                  type="radio"
                  name="tags"
                  value={"light"}
                  checked={selectedTheme === "light"}
                  onChange={handleTagChange}
                />
                Dark
                <input
                  type="radio"
                  name="tags"
                  value={"dark"}
                  checked={selectedTheme === "dark"}
                  onChange={handleTagChange}
                />
              </label>
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