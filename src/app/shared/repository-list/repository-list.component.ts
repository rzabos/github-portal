import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { GitHubResponse } from "src/app/core/models";

@Component({
  selector: "app-repository-list",
  templateUrl: "./repository-list.component.html",
  styleUrls: ["./repository-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryListComponent {
  @Input() public response?: GitHubResponse | null;
  @Input() public currentPage = 0;
  @Output() public paginate = new EventEmitter<number>();
}
