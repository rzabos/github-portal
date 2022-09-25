import { Query } from "../core/models";

export interface State {
  isLoading: boolean;
  sidebar: boolean;
  error: string | null;
  history: Query[];
}
