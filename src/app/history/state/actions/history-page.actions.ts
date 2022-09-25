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

export const changeOrder = createAction(
  "[History Page] Change Order",
  props<{ order: string }>()
);

export const changeSort = createAction(
  "[History Page] Change Sort",
  props<{ sort: string }>()
);
