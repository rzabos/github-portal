import { createAction, props } from "@ngrx/store";
import { Query } from "src/app/core/models";

export const executeQuery = createAction(
  "[App Page] Execute Query",
  props<{ query: Query }>()
);

export const loading = createAction("[App Page] Loading");

export const toogleSidebar = createAction("[App Page] Toggle Sidebar");
