export interface QueryRequest {
  query: string;
  sortBy?: string | null;
  orderBy?: string;
  pageNumber?: number;
}
