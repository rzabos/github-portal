import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";
import { GitHubResponse } from "src/app/core/models";

@Component({
  selector: "app-repository-list",
  templateUrl: "./repository-list.component.html",
  styleUrls: ["./repository-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryListComponent implements OnDestroy {
  public order = new FormControl<string>("desc");
  public sort = new FormControl<string>("");

  @Input() public response?: GitHubResponse | null;
  @Input() public currentPage = 0;
  @Output() public paginate = new EventEmitter<number>();
  @Output() public changeOrder = new EventEmitter<string>();
  @Output() public changeSort = new EventEmitter<string>();

  private readonly _onDestroySubject = new Subject();

  public constructor() {
    this.sort.valueChanges
      .pipe(takeUntil(this._onDestroySubject))
      .subscribe((value) => this.changeSort.emit(value ?? ""));

    this.order.valueChanges
      .pipe(takeUntil(this._onDestroySubject))
      .subscribe((value) => this.changeOrder.emit(value ?? ""));
  }

  public ngOnDestroy(): void {
    this._onDestroySubject.next(null);
    this._onDestroySubject.complete();
  }
}
