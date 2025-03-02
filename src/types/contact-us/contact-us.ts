export interface ContactUsResponse {
  allContactRequests: AllContactRequestsDetail[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}

export interface AllContactRequestsDetail {
  id: number;
  name: string;
  subject: string;
  content: string;
  email: string;
  status: 'PENDING' | 'DONE' | 'DELETED';
  created_at: number;
  replied_at: number;
}

export interface ReplayItemBody {
  id: number;
  subject: string;
  content: string;
}
