import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { map, Observable, of, tap } from "rxjs";
import { RangeForm, RangeType } from "../../models";
import { FormService } from "../../utils/form.service";

@Component({
  selector: "app-range",
  templateUrl: "./range.component.html",
  styleUrls: ["./range.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RangeComponent {
  public rangeTypes = RangeType;
  public displayOtherValue$: Observable<boolean>;

  @Input() public rangeType = RangeType.Number;
  @Input() public label = "Range";
  @Input() public set form(value: FormGroup<RangeForm>) {
    this.displayOtherValue$ = value.controls.comparer.valueChanges.pipe(
      map((c) => c === ".."),
      tap((isBetween) => {
        isBetween
          ? this._form.controls.otherValue.enable()
          : this._form.controls.otherValue.disable();
      })
    );

    this._form = value;
  }

  public get form(): FormGroup<RangeForm> {
    return this._form;
  }

  private _form: FormGroup<RangeForm>;

  public constructor(formService: FormService) {
    this._form = formService.initRangeForm();
    this.displayOtherValue$ = of(false);
  }
}
