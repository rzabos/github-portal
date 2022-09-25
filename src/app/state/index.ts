import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./state";

export const selectAppState = createFeatureSelector<State>("app");

export const selectIsLoading = createSelector(
  selectAppState,
  (state) => state.isLoading
);

export const selectError = createSelector(
  selectAppState,
  (state) => state.error
);

export const selectHistory = createSelector(
  selectAppState,
  (state) => state.history
);
