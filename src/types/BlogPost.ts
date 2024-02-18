export interface BlogPost {
    id: string;
    title: string;
    image: string;
    excerpt: string;
    author: string;
    date: string; 
    slug?: string;
    content: string;
    minRead: number;
    tags: string;
  };
  