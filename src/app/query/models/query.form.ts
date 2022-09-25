import { FormControl, FormGroup } from "@angular/forms";
import { AdvancedForm } from "./advanced.form";
import { InForm } from "./in.form";

export interface QueryForm {
  text: FormControl<string>;
  in: FormGroup<InForm>;
  advanced: FormGroup<AdvancedForm>;
}
