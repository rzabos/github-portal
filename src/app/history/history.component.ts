import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatSelectionListChange } from "@angular/material/list";
import { Store } from "@ngrx/store";
import { selectHistory } from "../state";
import { selectCurrentPage, selectResponse } from "./state";
import { HistoryPageActions } from "./state/actions";

@Component({
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent {
  public history$ = this.store.select(selectHistory);
  public response$ = this.store.select(selectResponse);
  public currentPage$ = this.store.select(selectCurrentPage);

  public constructor(private store: Store) {}

  public onSelectionChange(event: MatSelectionListChange): void {
    const query = event.options[0].value;
    this.store.dispatch(HistoryPageActions.loadHistory({ query }));
  }

  public onPagination(page: number): void {
    this.store.dispatch(HistoryPageActions.changePage({ page }));
  }
}
