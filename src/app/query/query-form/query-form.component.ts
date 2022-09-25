import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Query } from "src/app/core/models";
import { QueryForm } from "../models";
import { FormErrorStateMatcher } from "../utils";
import { FormService } from "../utils/form.service";

@Component({
  selector: "app-query-form",
  templateUrl: "./query-form.component.html",
  styleUrls: ["./query-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryFormComponent {
  public matcher = new FormErrorStateMatcher();
  public form: FormGroup<QueryForm>;

  @Input() public set isAdvancedQuery(value: boolean | null) {
    value
      ? this.form.controls.advanced.enable()
      : this.form.controls.advanced.disable();

    this._isAdvancedQeury = !!value;
  }
  public get isAdvancedQuery(): boolean {
    return this._isAdvancedQeury;
  }

  @Output() public submitQuery = new EventEmitter<Query>();
  @Output() public resetRepositories = new EventEmitter();
  @Output() public toggleAdvancedQuery = new EventEmitter();

  private _isAdvancedQeury = false;
  public constructor(formService: FormService) {
    this.form = formService.initQueryForm();
  }

  public onSubmit(): void {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitQuery.emit(this.form.value);
  }

  public onAdvancedToggled(): void {
    this.toggleAdvancedQuery.emit();
  }
}
