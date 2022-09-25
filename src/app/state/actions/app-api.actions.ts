import { createAction, props } from "@ngrx/store";

export const serviceFailure = createAction(
  "[App Page] Service Failure",
  props<{ error: string }>()
);

export const serviceSuccess = createAction("[App Page] Service Success");
