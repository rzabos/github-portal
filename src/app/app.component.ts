import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Store } from "@ngrx/store";
import { Subject, takeUntil } from "rxjs";
import { selectError } from "./state";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy {
  private readonly _onDestroySubject = new Subject();

  public constructor(snackBar: MatSnackBar, store: Store) {
    store
      .select(selectError)
      .pipe(takeUntil(this._onDestroySubject))
      .subscribe((error) => {
        if (error) {
          snackBar.open(error, "Try again later!", { duration: 5000 });
          return;
        }

        snackBar.dismiss();
      });
  }

  public ngOnDestroy(): void {
    this._onDestroySubject.next(null);
    this._onDestroySubject.complete();
  }
}
