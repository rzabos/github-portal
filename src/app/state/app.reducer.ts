import { createReducer, on } from "@ngrx/store";
import { AppApiActions, AppPageActions } from "./actions";
import { State } from "./state";

export const initialState: State = {
  error: null,
  history: [],
  isLoading: false,
};

export const appReducer = createReducer<State>(
  initialState,
  on(AppPageActions.executeQuery, (state, action) => ({
    ...state,
    isLoading: true,
    error: null,
    history: [action.query, ...state.history],
  })),
  on(AppApiActions.serviceFailure, (state, action) => ({
    ...state,
    error: action.error,
    isLoading: false,
  })),
  on(AppApiActions.serviceSuccess, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(AppPageActions.loading, (state) => ({ ...state, isLoading: true }))
);
