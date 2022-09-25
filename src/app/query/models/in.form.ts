import { FormControl } from "@angular/forms";

export interface InForm {
  name: FormControl<boolean>;
  description: FormControl<boolean>;
  readme: FormControl<boolean>;
}
