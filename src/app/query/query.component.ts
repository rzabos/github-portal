import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Query } from "../core/models";
import { selectCurrentPage, selectIsAdvanced, selectResponse } from "./state";
import { QueryPageActions } from "./state/actions";

@Component({
  templateUrl: "./query.component.html",
  styleUrls: ["./query.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryComponent {
  public isAdvancedQuery$ = this.store.select(selectIsAdvanced);
  public response$ = this.store.select(selectResponse);
  public currentPage$ = this.store.select(selectCurrentPage);

  public constructor(private store: Store) {}

  public onResetRepositories(): void {
    this.store.dispatch(QueryPageActions.resetRepositories());
  }

  public onSubmitQuery(query: Query): void {
    this.store.dispatch(QueryPageActions.loadRepositories({ query }));
  }

  public onToggleAdvancedQuery(): void {
    this.store.dispatch(QueryPageActions.toggleAdvancedQuery());
  }

  public onPagination(page: number): void {
    this.store.dispatch(QueryPageActions.changePage({ page }));
  }
}
