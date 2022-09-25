import { createAction, props } from "@ngrx/store";
import { GitHubResponse } from "src/app/core/models";

export const loadRepositoriesSuccess = createAction(
  "[Query API] Load Repositories Success",
  props<{ response: GitHubResponse }>()
);
