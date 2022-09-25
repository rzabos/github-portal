import { FormControl } from "@angular/forms";

export interface RangeForm {
  value: FormControl<string>;
  otherValue: FormControl<string | null>;
  comparer: FormControl<string>;
}
