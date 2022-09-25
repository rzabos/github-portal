import { createAction, props } from "@ngrx/store";
import { Query } from "src/app/core/models";

export const toggleAdvancedQuery = createAction(
  "[Query Page] Toggle Advanced Query Options"
);

export const changePage = createAction(
  "[Query Page] Change Page",
  props<{ page: number }>()
);

export const loadRepositories = createAction(
  "[Query Page] Load Repositories",
  props<{ query: Query }>()
);

export const resetRepositories = createAction(
  "[Query Page] Reset Repositories"
);

export const loadHistory = createAction(
  "[History Page] Load History",
  props<{ query: Query }>()
);
