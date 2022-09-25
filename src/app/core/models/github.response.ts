import { Repository } from "./repository";

export interface GitHubResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
  total_pages: number;
}
