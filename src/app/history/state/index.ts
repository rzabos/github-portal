import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HistoryState } from "./history.state";

export const selectorKey = "history";
export const selectHistoryState =
  createFeatureSelector<HistoryState>(selectorKey);

export const selectResponse = createSelector(
  selectHistoryState,
  (state) => state.response
);

export const selectSortBy = createSelector(
  selectHistoryState,
  (state) => state.sortBy
);

export const selectOrderBy = createSelector(
  selectHistoryState,
  (state) => state.orderBy
);

export const selectCurrentPage = createSelector(
  selectHistoryState,
  (state) => state.currentPage
);

export const selectQuery = createSelector(
  selectHistoryState,
  (state) => state.query
);

export const selectSidebar = createSelector(
  selectHistoryState,
  (state) => state.sidebar
);
