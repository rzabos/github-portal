import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AdvancedForm, RangeType } from "../../models";
import { FormService } from "../../utils";

@Component({
  selector: "app-advanced-form",
  templateUrl: "./advanced-form.component.html",
  styleUrls: ["./advanced-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedFormComponent {
  public rangeTypes = RangeType;
  @Input() public form: FormGroup<AdvancedForm>;

  public constructor(formService: FormService) {
    this.form = formService.initAdvancedForm();
  }
}
