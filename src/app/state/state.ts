import { Query } from "../core/models";

export interface State {
  isLoading: boolean;
  error: string | null;
  history: Query[];
}
