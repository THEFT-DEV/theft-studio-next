export interface Project {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  date: string;
  thumbnail: string;
  categories: string[];
  tags: string[];
  images?: string[];
  sempliceContent?: any;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  thumbnail: string;
  categories: string[];
  tags: string[];
}

export interface Page {
  id: number;
  title: string;
  slug: string;
  content: string;
  sempliceContent?: any;
}
