import { createAction, props } from "@ngrx/store";
import { Query } from "src/app/core/models";

export const loadHistory = createAction(
  "[History Page] Load History",
  props<{ query: Query }>()
);

export const changePage = createAction(
  "[History Page] Change Page",
  props<{ page: number }>()
);
