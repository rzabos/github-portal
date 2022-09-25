import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AdvancedForm, RangeForm } from "../../models";

@Component({
  selector: "app-advanced-form",
  templateUrl: "./advanced-form.component.html",
  styleUrls: ["./advanced-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedFormComponent {
  @Input() public form: FormGroup<AdvancedForm>;

  public constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.nonNullable.group<AdvancedForm>({
      username: formBuilder.nonNullable.control<string>(""),
      organization: formBuilder.nonNullable.control<string>(""),
      languages: formBuilder.nonNullable.array<string>([]),
      topics: formBuilder.nonNullable.array<string>([]),
      stars: formBuilder.nonNullable.group<RangeForm>({
        comparer: formBuilder.nonNullable.control("="),
        value: formBuilder.nonNullable.control(""),
        otherValue: formBuilder.control<string | null>(null),
      }),
      size: formBuilder.nonNullable.group<RangeForm>({
        comparer: formBuilder.nonNullable.control("="),
        value: formBuilder.nonNullable.control(""),
        otherValue: formBuilder.control<string | null>(null),
      }),
      created: formBuilder.nonNullable.group<RangeForm>({
        comparer: formBuilder.nonNullable.control("="),
        value: formBuilder.nonNullable.control(""),
        otherValue: formBuilder.control<string | null>(null),
      }),
    });
  }
}
