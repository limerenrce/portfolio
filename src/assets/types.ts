export interface Author {
  id: number;
  name: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  author: Author;
  tags: string[];
  created_at: string;
  // updated_at: string;
}
