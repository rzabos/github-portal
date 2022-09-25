import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormArray, FormBuilder, FormControl } from "@angular/forms";
import { MatChipInputEvent } from "@angular/material/chips";

@Component({
  selector: "app-chips",
  templateUrl: "./chips.component.html",
  styleUrls: ["./chips.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipsComponent {
  @Input() public label?: string;
  @Input() public chips: FormArray<FormControl<string>>;

  public constructor(private _formBuilder: FormBuilder) {
    this.chips = _formBuilder.nonNullable.array<FormControl<string>>([]);
  }

  public addChip(event: MatChipInputEvent): void {
    this.chips.push(this._formBuilder.nonNullable.control(event.value));
    event.chipInput.clear();
  }
}
