import { GitHubResponse, Query } from "src/app/core/models";

export interface HistoryState {
  sortBy?: string | null;
  orderBy: string;
  totalPage: number;
  currentPage: number;
  totalResults: number;
  response: GitHubResponse | null;
  query: Query | null;
}
