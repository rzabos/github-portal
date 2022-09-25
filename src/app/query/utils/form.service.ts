import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AdvancedForm, InForm, QueryForm, RangeForm } from "../models";

@Injectable()
export class FormService {
  public constructor(private _formBuilder: FormBuilder) {}

  public initAdvancedForm(): FormGroup<AdvancedForm> {
    return this._formBuilder.nonNullable.group<AdvancedForm>({
      username: this._formBuilder.nonNullable.control<string>(
        "",
        Validators.minLength(3)
      ),
      organization: this._formBuilder.nonNullable.control<string>(
        "",
        Validators.minLength(3)
      ),
      languages: this._formBuilder.nonNullable.array<string>([]),
      topics: this._formBuilder.nonNullable.array<string>([]),
      stars: this.initRangeForm(),
      size: this.initRangeForm(),
      created: this.initRangeForm(),
    });
  }

  public initRangeForm(): FormGroup<RangeForm> {
    return this._formBuilder.nonNullable.group<RangeForm>({
      comparer: this._formBuilder.nonNullable.control(""),
      value: this._formBuilder.nonNullable.control(""),
      otherValue: this._formBuilder.control<string | null>(null),
    });
  }

  public initInForm(): FormGroup<InForm> {
    return this._formBuilder.nonNullable.group<InForm>({
      name: this._formBuilder.nonNullable.control(true),
      description: this._formBuilder.nonNullable.control(false),
      readme: this._formBuilder.nonNullable.control(false),
    });
  }

  public initQueryForm(): FormGroup<QueryForm> {
    return this._formBuilder.nonNullable.group<QueryForm>({
      text: this._formBuilder.nonNullable.control<string>("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      in: this.initInForm(),
      advanced: this.initAdvancedForm(),
    });
  }
}
