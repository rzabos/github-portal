import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, of, switchMap } from "rxjs";
import { QueryRequest } from "src/app/core/models";
import { buildQuery, GitHubService } from "src/app/core/utils";
import { AppApiActions, AppPageActions } from "src/app/state/actions";
import { selectCurrentPage, selectOrderBy, selectQuery, selectSortBy } from ".";
import { HistoryApiActions, HistoryPageActions } from "./actions";

@Injectable()
export class HistoryEffects {
  public loading$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(HistoryPageActions.loadHistory, HistoryPageActions.changePage),
      switchMap(() => of(AppPageActions.loading()))
    );
  });

  public load$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(HistoryPageActions.loadHistory, HistoryPageActions.changePage),
      concatLatestFrom(() => [
        this.store.select(selectQuery),
        this.store.select(selectCurrentPage),
        this.store.select(selectSortBy),
        this.store.select(selectOrderBy),
      ]),
      switchMap(([_, query, currentPage, sortBy, orderBy]) => {
        if (!query) {
          throw new Error("Query must be specified.");
        }

        const request: QueryRequest = {
          query: buildQuery(query),
          orderBy: orderBy,
          sortBy: sortBy,
          pageNumber: currentPage,
        };

        return this._gitHubService.getRepositories(request).pipe(
          switchMap((response) =>
            of(
              HistoryApiActions.loadHistorySuccess({ response }),
              AppApiActions.serviceSuccess()
            )
          ),
          catchError((error: string) =>
            of(AppApiActions.serviceFailure({ error }))
          )
        );
      })
    );
  });

  public constructor(
    private readonly store: Store,
    private readonly _actions$: Actions,
    private readonly _gitHubService: GitHubService
  ) {}
}
