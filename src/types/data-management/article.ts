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
  parentCategoryId: number;
  is_published: boolean;
  created_at: number;
  updated_at: number;
  categoryName: string;
  parentCategoryName: string;
  cityId: number;
  citiesName: string;
  provinceId: number;
  provinceName: string;
  status: boolean;
  writer: string;
}

export interface ArticleListBody {
  title: string;
  created_atStart: number;
  created_atEnd: number;
  updated_atStart: number;
  updated_atEnd: number;
  categoryId: number;
  parentCategoryId: number;
  is_published: boolean | string;
}

export interface CreateAndEditArticleBody {
  title: string;
  content: string;
  writer: string;
  on_titile: string;
  source: string;
  summery: string;
  brief: string;
  slug: string;
  tableOfContent: string;
  inMain: boolean;
  inTop: boolean;
  provincesId: number;
  citiesId: number;
  tags: string[];
  keywords: string[];
  meta_title: string;
  meta_description: string;
  view: number;
  status: boolean;
  is_published: boolean;
  categoryId: number;
  parentCategoryId: number;
  source_link: string;
  pic: string;
  isSlider: boolean;
  places: [];
}
