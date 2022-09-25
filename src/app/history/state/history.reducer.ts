import { createReducer, on } from "@ngrx/store";
import { HistoryApiActions, HistoryPageActions } from "./actions";
import { HistoryState } from "./history.state";

export const initialState: HistoryState = {
  currentPage: 0,
  totalPage: 0,
  totalResults: 0,
  orderBy: "desc",
  sortBy: null,
  query: null,
  response: null,
};

export const historyReducer = createReducer<HistoryState>(
  initialState,
  on(HistoryPageActions.loadHistory, (state, action) => ({
    ...state,
    query: action.query,
    totalPage: 0,
    totalResults: 0,
    currentPage: 0,
  })),
  on(HistoryApiActions.loadHistorySuccess, (state, action) => ({
    ...state,
    response: action.response,
  })),
  on(HistoryPageActions.changePage, (state, action) => ({
    ...state,
    currentPage: action.page,
  }))
);
