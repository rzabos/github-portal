import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { RangeForm } from "./range.form";

export interface AdvancedForm {
  username: FormControl<string>;
  organization: FormControl<string>;
  languages: FormArray<FormControl<string>>;
  topics: FormArray<FormControl<string>>;
  stars: FormGroup<RangeForm>;
  size: FormGroup<RangeForm>;
  created: FormGroup<RangeForm>;
}
