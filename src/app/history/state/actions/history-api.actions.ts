import { createAction, props } from "@ngrx/store";
import { GitHubResponse } from "src/app/core/models";

export const loadHistorySuccess = createAction(
  "[History Page] Load History Success",
  props<{ response: GitHubResponse }>()
);
