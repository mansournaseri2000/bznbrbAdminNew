export interface ArticleListResponse {
  articles: ArticleSDetail[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}

export interface ArticleSDetail {
  id: number;
  title: string;
  categoryId: number;
  categoryName: string;
  is_published: boolean;
  created_at: number;
  updated_at: number;
}

export interface ArticleListBody {
  title: string;
  created_atStart: number;
  created_atEnd: number;
  updated_atStart: number;
  updated_atEnd: number;
  categoryId: number;
  parentCategoryId: number;
  is_published: boolean |string;
}
