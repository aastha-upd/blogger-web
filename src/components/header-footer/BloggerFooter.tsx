import React, { FC } from 'react';
import "./BloggerFooter.css";

const BloggerFooter: FC = () => {
  return (
    <footer className="blogger-footer">
      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to reach out to us at:</p>
        <p>Email: example@example.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
    </footer>
  );
}

export default BloggerFooter;
