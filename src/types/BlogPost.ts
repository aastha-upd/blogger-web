import { BlogTags } from "./BlogTag";

export interface BlogPost {
    id: number;
    title: string;
    image: string;
    excerpt: string;
    author: string;
    date: string; 
    slug?: string;
    content: string;
    minRead: number;
    tags: BlogTags[];
  };
  