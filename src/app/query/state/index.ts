import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QueryState } from "./query.state";

export const selectorKey = "query";
export const selectQueryState = createFeatureSelector<QueryState>(selectorKey);

export const selectIsAdvanced = createSelector(
  selectQueryState,
  (state) => state.isAdvanced
);

export const selectSortBy = createSelector(
  selectQueryState,
  (state) => state.sortBy
);

export const selectOrderBy = createSelector(
  selectQueryState,
  (state) => state.orderBy
);

export const selectCurrentPage = createSelector(
  selectQueryState,
  (state) => state.currentPage
);

export const selectResponse = createSelector(
  selectQueryState,
  (state) => state.response
);

export const selectQuery = createSelector(
  selectQueryState,
  (state) => state.query
);
