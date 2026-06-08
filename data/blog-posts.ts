export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  coverImage: string | null;
}

export const blogPosts: BlogPost[] = [];
