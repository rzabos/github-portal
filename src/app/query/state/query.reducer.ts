import { createReducer, on } from "@ngrx/store";
import { QueryApiActions, QueryPageActions } from "./actions";
import { QueryState } from "./query.state";

export const initialState: QueryState = {
  isAdvanced: false,
  currentPage: 0,
  totalPage: 0,
  totalResults: 0,
  orderBy: "desc",
  sortBy: null,
  query: null,
  response: null,
};

export const queryReducer = createReducer<QueryState>(
  initialState,
  on(QueryPageActions.toggleAdvancedQuery, (state) => ({
    ...state,
    isAdvanced: !state.isAdvanced,
  })),
  on(QueryPageActions.loadRepositories, (state, action) => ({
    ...state,
    query: action.query,
    totalPage: 0,
    totalResults: 0,
    currentPage: 0,
  })),
  on(QueryPageActions.changePage, (state, action) => ({
    ...state,
    currentPage: action.page,
  })),
  on(QueryPageActions.resetRepositories, (state) => ({
    ...state,
    totalPage: 0,
    totalResults: 0,
    currentPage: 0,
  })),
  on(QueryApiActions.loadRepositoriesSuccess, (state, action) => ({
    ...state,
    response: action.response,
  }))
);
